const WebSocket = require('ws');
const express = require('express');
const router = express.Router();
const WebSocketData = require('../../models/Websocket'); 

const API_KEY = '974aee72834a4bf1a98e2805ead7d630';
const HEARTBEAT_INTERVAL = 3 * 1000; // 30 seconds

const ws = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?apikey=${API_KEY}`);

let isAlive = false;

ws.on('open', () => {
  // subscribe to data for the specified symbols
  ws.send(JSON.stringify({
    action: 'subscribe',
    params: {
      symbols: "AAPL,INFY,TRP,QQQ,IXIC,EUR/USD,USD/JPY,BTC/USD,ETH/BTC",
    },
  }));

  // start the heartbeat
  isAlive = true;
  setInterval(() => {
    if (isAlive === false) {
      console.log('WebSocket connection lost');
      ws.terminate();
      return;
    }

    isAlive = false;
    ws.ping();
  }, HEARTBEAT_INTERVAL);
});

ws.on('pong', () => {
  isAlive = true;
});

ws.on('message', (data) => {
  const websocketData = new WebSocketData({
    event: data.event,
    symbol: data.symbol,
    currency_base: data.currency_base,
    currency_quote: data.currency_quote,
    type: data.type,
    timestamp: data.timestamp,
    price: data.price,
    bid: data.bid,
    ask: data.ask
  });
  
  websocketData.save()
    .then(() => {
      // document saved successfully
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
});

ws.on('error', (error) => {
  console.error(error);
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});

router.get('/stocks', (req, res) => {
  // handle the /stocks route
});

module.exports = router;