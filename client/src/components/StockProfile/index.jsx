const StockProfile = ({
    stock
  }) => {
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
            </div>
        </div>
      </div>
    );
  };

  export default StockProfile;