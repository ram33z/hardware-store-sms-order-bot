const Order = require("./Order");

const {
  ItemSize,
  ItemsMenu,
  ExtraPricing,
  HST_RATE,
} = require("./ShawarmaMenu");

const OrderState = Object.freeze({
  WELCOMING: Symbol("welcoming"),
  ITEM: Symbol("item"),
  SIZE: Symbol("size"),
  TOPPINGS: Symbol("toppings"),
  DRINKS: Symbol("drinks"),
  PAYMENT: Symbol("payment"),
  TIP: Symbol("tip"),
});

module.exports = class ShwarmaOrder extends Order {
  constructor(sNumber, sUrl) {
    super(sNumber, sUrl);
    this.stateCur = OrderState.WELCOMING;
    this.sItem = {};
    this.sSize = "";
    this.sToppings = "";
    this.sDrinks = "";
    this.sItem = "shawarama";
    this.sTip = 0;
  }
  handleInput(sInput) {
    let aReturn = [];
    switch (this.stateCur) {
      case OrderState.WELCOMING:
        this.stateCur = OrderState.ITEM;
        aReturn.push("Welcome to Rameez's Shawarma.");
        aReturn.push("What item would you like to order?");
        ItemsMenu.map((item, index) =>
          aReturn.push(`${index + 1} . ${item.name}`)
        );
        break;
      case OrderState.ITEM:
        if (isNaN(sInput) || sInput < 1 || sInput > ItemsMenu.length) {
          aReturn.push("Please enter valid item number.");
          break;
        }
        this.stateCur = OrderState.SIZE;
        this.sItem = ItemsMenu[sInput - 1];
        aReturn.push("What size would you like? (M/L)");
        break;
      case OrderState.SIZE:
        let size = sInput.toLowerCase();
        if (!Object.keys(ItemSize).includes(size)) {
          aReturn.push(
            "Please enter valid item size (M for Medium or L for Large)."
          );
          break;
        }
        this.stateCur = OrderState.TOPPINGS;
        this.sSize = ItemSize[size];
        aReturn.push(
          "What toppings would you like? Please reply 'no' to skip."
        );
        break;
      case OrderState.TOPPINGS:
        this.stateCur = OrderState.DRINKS;
        this.sToppings = sInput;
        aReturn.push(
          "Would you like drinks with that? Please reply 'no' to skip."
        );
        break;
      case OrderState.DRINKS:
        this.stateCur = OrderState.TIP;
        this.sDrinks = sInput;
        aReturn.push("Would you like to add a TIP? Please reply 'no' to skip.");
        break;
      case OrderState.TIP:
        if (sInput.toLowerCase() != "no") {
          if (isNaN(sInput)) {
            aReturn.push(
              "Please enter valid tip in digits or reply 'no' to skip."
            );
            break;
          }
        }
        this.sTip = sInput;

        // Get item price as per the specified item size
        let totalPrice = this.sItem[this.sSize.description];
        aReturn.push("=== Order Summary ===");
        aReturn.push("Thank-you for your order of");
        aReturn.push(
          `${this.sItem.name} of size ${this.sSize.description} - ($${
            this.sItem[this.sSize.description]
          })`
        );
        // Topping Calculation
        if (this.sToppings.toLowerCase() !== "no") {
          aReturn.push(
            `Toppings: ${this.sToppings} ($${ExtraPricing.TOPPINGS})`
          );
          totalPrice += ExtraPricing.TOPPINGS;
        }
        // Drink Calculation
        if (this.sDrinks.toLowerCase() !== "no") {
          aReturn.push(`Drinks: ${this.sDrinks} ($${ExtraPricing.DRINKS})`);
          totalPrice += ExtraPricing.DRINKS;
        }
        // Tips calculation
        if (this.sTip.toString().toLowerCase() !== "no") {
          aReturn.push(`Tip: $${this.sTip}`);
          totalPrice += Number(this.sTip);
        }
        //Calculate tax
        let tax = totalPrice * HST_RATE;
        aReturn.push(`HST: $${tax.toFixed(2)}`);

        totalPrice = (totalPrice + tax).toFixed(2);
        aReturn.push(`Order Total: $${totalPrice}`);

        this.nOrder = totalPrice;

        aReturn.push(`Please pay for your order here`);
        aReturn.push(`${this.sUrl}/payment/${this.sNumber}/`);

        aReturn.push("=== End Order Summary ===");
        this.stateCur = OrderState.PAYMENT;
        break;
      case OrderState.PAYMENT:
        if (typeof sInput === "object") {
          this.isDone(true);
          if (sInput && sInput.status === "COMPLETED") {
            //Print shipping details recieved from paypal.
            let shippingInfo = sInput.purchase_units[0].shipping;
            aReturn.push(`Shipping Info:
            Deliver to: ${shippingInfo.name.full_name},
            Address: ${shippingInfo.address.address_line_1} ${shippingInfo.address.admin_area_1} ${shippingInfo.address.admin_area_2} ${shippingInfo.address.postal_code} ${shippingInfo.address.country_code}`);

            let d = new Date();
            d.setMinutes(d.getMinutes() + 20);
            aReturn.push(`Your order will be delivered at ${d.toTimeString()}`);
          } else {
            aReturn.push(`Payment failed! Please try ordering again.`);
          }
        } else {
          if (sInput !== "cancel") { 
            aReturn.push(
              `Please complete payment by clicking the url given above. Enter 'cancel' to start new order.`
            );
          } else {
            this.isDone(true);
            aReturn.push(
              `Order is Cancelled. Press any key to start new order.`
            );
          }
         
        }
        console.log("rameez", sInput);
        break;
    }
    return aReturn;
  }
  renderForm(sTitle = "-1", sAmount = "-1") {
    // your client id should be kept private
    if (sTitle != "-1") {
      this.sItem = sTitle;
    }
    if (sAmount != "-1") {
      this.nOrder = sAmount;
    }
    const sClientID = process.env.SB_CLIENT_ID || false;
    const msg = !sClientID
      ? "put your client id here for testing ... Make sure that you delete it before committing"
      : "";
    return `
      <!DOCTYPE html>
  
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Ensures optimal rendering on mobile devices. -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <!-- Optimal Internet Explorer compatibility -->
      </head>
      
      <body>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script
          src="https://www.paypal.com/sdk/js?client-id=${
            sClientID || msg
          }"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
        </script>
        <p>
        Thank you ${this.sNumber} for your ${this.sItem.name} order of $${
      this.nOrder
    }.
        <br/>
        ${msg}
        </p>
        <div id="paypal-button-container"></div>
  
        <script>
          paypal.Buttons({
              createOrder: function(data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: '${this.nOrder}'
                    }
                  }]
                });
              },
              onApprove: function(data, actions) {
                // This function captures the funds from the transaction.
                return actions.order.capture().then(function(details) {
                  // This function shows a transaction success message to your buyer.
                  $.post(".", details, ()=>{
                    window.open("", "_self");
                    window.close(); 
                  });
                });
              }
          
            }).render('#paypal-button-container');
          // This function displays Smart Payment Buttons on your web page.
        </script>
      
      </body>
          
      `;
  }
};
