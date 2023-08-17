const FavoriteStockList = ({
  stocks
}) => {
  if (!stocks.length) {
    return <h3>No Favorited Stocks Yet</h3>;
  }

  return (
    <div>
      {stocks &&
        stocks.map((stock) => (
          <div key={stocks._id} className="card mb-3">
            <div className="card-body bg-light p-2">
              <p>{stock.name}</p>
              <p>{stock.symbol}</p>
              <p>{stock.close}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FavoriteStockList;
