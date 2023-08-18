import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STOCKS, GET_RANDOM_STOCK } from '../utils/queries';
import StockProfile from '../components/StockProfile'
import Auth from '../utils/auth';

export default function Home() {
  const token = Auth.getToken();
  //const { loading, error, data } = useQuery(GET_STOCKS);
  const { loading, error, data } = useQuery(GET_RANDOM_STOCK, { context: {headers:{authorization: `Bearer ${token}`}}});
  const [expandedStock, setExpandedStock] = useState(null);
  const stock = data?.stock || {};
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data.randomStock);
  
  return (
    <div>
      <StockProfile
          stock={data.randomStock}
        />
    </div>
  )
/*
  return data.stocks.map((stock) => (
    <div key={stock.symbol} onClick={() => handleStockClick(stock.symbol)}>
      <h3>{stock.name} ({stock.symbol})</h3>
      <p>Exchange: {stock.exchange}</p>
      <p>MIC Code: {stock.mic_code}</p>
      <p>Currency: {stock.currency}</p>
      <p>Date: {stock.datetime}</p>
      <p>Timestamp: {stock.timestamp}</p>
      <p>Open: {stock.open}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Close: {stock.close}</p>
      <p>Volume: {stock.volume}</p>
      <p>Previous Close: {stock.previous_close}</p>
      <p>Change: {stock.change}</p>
      <p>Percent Change: {stock.percent_change}</p>
      <p>Average Volume: {stock.average_volume}</p>
      <p>Is Market Open: {stock.is_market_open ? 'Yes' : 'No'}</p>
      <h4>Fifty Two Week</h4>
      {expandedStock === stock.symbol && (
        <ul>
          <li>Low: {stock.fifty_two_week.low}</li>
          <li>High: {stock.fifty_two_week.high}</li>
          <li>Low Change: {stock.fifty_two_week.low_change}</li>
          <li>High Change: {stock.fifty_two_week.high_change}</li>
          <li>Low Change Percent: {stock.fifty_two_week.low_change_percent}</li>
          <li>High Change Percent: {stock.fifty_two_week.high_change_percent}</li>
          <li>Range: {stock.fifty_two_week.range}</li>
        </ul>
      )}
    </div>
  ));
  */
}