import { useState } from 'react';

const StockProfile = ({
    stock
  }) => {
    
    const [expandedStock, setExpandedStock] = useState(null);
    if (!stock) {
      return <h3>No Stock Selected</h3>;
    }
  
    return (
    
      <div> 
        <div key={stock._id} className="card mb-3">
            <div className="card-body bg-light p-2">
            <p>Name: {stock.name}</p>
            <p>Symbol: {stock.symbol}</p>
            <p>Open: {stock.open}</p>
            <p>Close: {stock.close}</p>
            <p>High: {stock.High}</p>
            <p>Low: {stock.close}</p>
            <p>Volume: {stock.volume}</p>
            <p>Previous Close: {stock.previous_close}</p>
            <p>Change: {stock.change}</p>
            <p>Percent Change: {stock.percent_change}</p>
            <p>Average Volume: {stock.average_volume}</p>
            <p>Is Market Open: {stock.is_market_open ? 'Yes' : 'No'}</p>
            <h4>Fifty Two Week</h4>
            
                <ul>
                    <li>Low: {stock.fifty_two_week.low}</li>
                <li>High: {stock.fifty_two_week.high}</li>
                <li>Low Change: {stock.fifty_two_week.low_change}</li>
                <li>High Change: {stock.fifty_two_week.high_change}</li>
                <li>Low Change Percent: {stock.fifty_two_week.low_change_percent}</li>
                <li>High Change Percent: {stock.fifty_two_week.high_change_percent}</li>
                <li>Range: {stock.fifty_two_week.range}</li>
                </ul>
                
            </div>
        </div>
      </div>
    );
  };

  export default StockProfile;