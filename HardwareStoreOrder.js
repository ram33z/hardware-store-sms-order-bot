const Order = require("./Order");

const {
  ItemsMenu,
  ExtraPricing,
  HST_RATE,
} = require("./HardwareStoreMenu");

const OrderState = Object.freeze({
  WELCOMING: Symbol("welcoming"),
  ITEM: Symbol("item"),
  SCREWS: Symbol("screws"),
  NAILS: Symbol("nails"),
  TAPE: Symbol("tape"),
  PAYMENT: Symbol("payment")
});

module.exports = class HardwareStoreOrder extends Order {
  constructor(sNumber, sUrl) {
    super(sNumber, sUrl);
    this.stateCur = OrderState.WELCOMING;
    this.sItem = {};
    this.sScrews = 0;
    this.sNails = 0;
    this.sTape = 0;
  }
  handleInput(sInput) {
    let aReturn = [];
    switch (this.stateCur) {
      case OrderState.WELCOMING:
        this.stateCur = OrderState.ITEM;
        aReturn.push("Welcome to Rameez's Hardware at Curbside.");
        aReturn.push("View full menu here: <a href='./HardwareatCurbside.html' target='_blank' style='color:#2ECC40'>Hardware @Curbside</a>.");

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
        this.stateCur = OrderState.SCREWS;
        this.sItem = ItemsMenu[sInput - 1];
        aReturn.push("How many screws you require? Please reply 0 to skip.");
        break;
      case OrderState.SCREWS:
        if (isNaN(sInput) || sInput < 0) {
          aReturn.push("Please enter valid number of Screws in digits.");
          break;
        }
        this.stateCur = OrderState.NAILS;
        this.sScrews = sInput;
        aReturn.push("How many nails you require? Please reply 0 to skip.");
        break;
      case OrderState.NAILS:
        if (isNaN(sInput) || sInput < 0) {
          aReturn.push("Please enter valid number of Nails in digits.");
          break;
        }
        this.stateCur = OrderState.TAPE;
        this.sNails = sInput;
        aReturn.push("How many tapes you require? Please reply 0 to skip.");
        break;
      case OrderState.TAPE:
        if (isNaN(sInput) || sInput < 0) {
          aReturn.push("Please enter valid number of Tapes in digits.");
          break;
        }
        this.sTape = sInput;
        // Get item price
        let totalPrice = this.sItem.price;
        aReturn.push("=== Order Summary ===");
        aReturn.push("Thank-you for your order of");
        aReturn.push(
          `${this.sItem.name} : ($${this.sItem.price})`
        );
        // Screws Calculation
        if (this.sScrews > 0) {
          aReturn.push(
            `Screws: ${this.sScrews} x ($${ExtraPricing.SCREWS})`
          );
          totalPrice += this.sScrews * ExtraPricing.SCREWS;
        }
        // Nails Calculation
        if (this.sNails > 0) {
          aReturn.push(
            `Nails: ${this.sNails} x ($${ExtraPricing.NAILS})`
          );
          totalPrice += this.sNails * ExtraPricing.NAILS;
        }
        // Tapes Calculation
        if (this.sTape > 0) {
          aReturn.push(
            `Tapes: ${this.sTape} x ($${ExtraPricing.TAPE})`
          );
          totalPrice += this.sTape * ExtraPricing.TAPE;
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
        console.log(typeof sInput, sInput);
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
