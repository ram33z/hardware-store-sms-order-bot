// Item size
const ItemSize = Object.freeze({
  m: Symbol("medium"),
  l: Symbol("large"),
});

//Items Menu
const ItemsMenu = [
  {
    name: "Chicken Shawarma",
    medium: 8.4,
    large: 10.4,
  },
  {
    name: "Gyro Sandwich",
    medium: 7.8,
    large: 9.8,
  },
  {
    name: "Falafel Sandwich",
    medium: 7.5,
    large: 9.5,
  },
];

// Extra Pricing
const ExtraPricing = {
  TOPPINGS: 1,
  DRINKS: 2.2,
};

//Tax
const HST_RATE = 0.13; //13%

module.exports = {
  ItemSize,
  ItemsMenu,
  ExtraPricing,
  HST_RATE,
};
