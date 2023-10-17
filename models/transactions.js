const { faker } = require("@faker-js/faker");

module.exports = [
  {
    id: 0,
    item_name: faker.commerce.productName(),
    amount: faker.number.int({ min: -10, max: 10 }),
    date: `${faker.date.anytime()}`,
    from: "",
    category: faker.finance.transactionType(),
  },
  {
    id: 0,
    item_name: "",
    amount: 0,
    date: `${faker.date.anytime()}`,
    from: "",
    category: "",
  },
  {
    id: 0,
    item_name: "",
    amount: 0,
    date: `${faker.date.anytime()}`,
    from: "",
    category: "",
  },
  {
    id: 0,
    item_name: "",
    amount: 0,
    date: `${faker.date.anytime()}`,
    from: "",
    category: "",
  },
  {
    id: 0,
    item_name: "",
    amount: 0,
    date: `${faker.date.anytime()}`,
    from: "",
    category: "",
  },
];
