const express = require('express');
const router = express.Router();
const Stock = require('../../models/Stock')

const apiKey = "974aee72834a4bf1a98e2805ead7d630";
const symbols = 'AAPL,MSFT,QQQ,RFX'
const url = `https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${apiKey}`

const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();
  
  // Update or create a document for each stock symbol
  for (const symbol in json) {
    const data = json[symbol];
    await Stock.findOneAndUpdate({ symbol }, data, { upsert: true });
  }
};

fetchData();

module.exports = router;