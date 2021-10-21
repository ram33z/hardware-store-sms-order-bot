//Items Menu
const ItemsMenu = [
  {
    name: "Dustbin",
    price: 4.9,
  },
  {
    name: "Snow Shovel",
    price: 10.5,
  },
  {
    name: "Garbage Container",
    price: 12.3,
  },
  {
    name: "Light Bulb",
    price: 1.2,
  },
  {
    name: "Furnace Cleaner",
    price: 6.7,
  },
  {
    name: "Headlamp",
    price: 14.99,
  },
];

// Extra Pricing
const ExtraPricing = {
  SCREWS: 0.1,
  NAILS: 0.12,
  TAPE: 2.2,
};

//Tax
const HST_RATE = 0.13; //13%

module.exports = {
  ItemsMenu,
  ExtraPricing,
  HST_RATE,
};
