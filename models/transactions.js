const { faker } = require("@faker-js/faker");

module.exports = [
  {
    id: faker.number.int({ min: 10000, max: 99999 }),
    item_name: faker.commerce.productName(),
    amount: faker.number.int({ min: -10, max: 100 }),
    date: `${faker.date.anytime()}`,
    from: `${faker.company.name()}`,
    category: faker.finance.transactionType(),
  },
  {
    id: faker.number.int({ min: 10000, max: 99999 }),
    item_name: faker.commerce.productName(),
    amount: faker.number.int({ min: -10, max: 10 }),
    date: `${faker.date.anytime()}`,
    from: `${faker.company.name()}`,
    category: faker.finance.transactionType(),
  },
  {
    id: faker.number.int({ min: 10000, max: 99999 }),
    item_name: faker.commerce.productName(),
    amount: faker.number.int({ min: -10, max: 10 }),
    date: `${faker.date.anytime()}`,
    from: `${faker.company.name()}`,
    category: faker.finance.transactionType(),
  },
  {
    id: faker.number.int({ min: 10000, max: 99999 }),
    item_name: faker.commerce.productName(),
    amount: faker.number.int({ min: -10, max: 10 }),
    date: `${faker.date.anytime()}`,
    from: `${faker.company.name()}`,
    category: faker.finance.transactionType(),
  },
  {
    id: faker.number.int({ min: 10000, max: 99999 }),
    item_name: faker.commerce.productName(),
    amount: faker.number.int({ min: -10, max: 10 }),
    date: `${faker.date.anytime()}`,
    from: `${faker.company.name()}`,
    category: faker.finance.transactionType(),
  },
];
