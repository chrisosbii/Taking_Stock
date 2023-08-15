
import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { GET_STOCKS } from '../utils/queries';


export default function UserProfile () {

    const { loading, error, data } = useQuery(GET_STOCKS);
    const [expandedStock, setExpandedStock] = useState(null);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const handleStockClick = (symbol) => {
      setExpandedStock(symbol === expandedStock ? null : symbol);
    };

    return(
        <div className="userPage">
        <div><p>This is where the username goes</p></div>
        {/* <div key={stock.symbol} onClick={() => handleStockClick(stock.symbol)}>
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
      </div> */}
        </div>
        
    )
}



