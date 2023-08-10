const db = require('../config/connection');
const { User, Stock } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const stockData = require('./stockData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Stock', 'stocks');

  await User.insertMany(userData);
  await Stock.insertMany(stockData);

  console.log('Users and Stocks seeded!');
  process.exit(0);
});
