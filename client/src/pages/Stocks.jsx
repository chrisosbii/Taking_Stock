import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_STOCKS_AND_FAVORITES } from "../utils/queries";
import { UPDATE_FAVORITE_STOCKS } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Home() {
  const profile = Auth.getProfile().authenticatedPerson;
  console.log(profile)

  const { loading, error, data } = useQuery(GET_STOCKS_AND_FAVORITES, {
    variables: { id: profile._id },
  });

  const [expandedStock, setExpandedStock] = useState(null);
  const [favoriteStock, setFavoriteStock] = useState(null);
  const [updateFavoriteStocks] = useMutation(UPDATE_FAVORITE_STOCKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleStockClick = (symbol) => {
    setExpandedStock(symbol === expandedStock ? null : symbol);
  };

  const handleFavoriteClick = async (symbol) => {
    try {
      const { data } = await updateFavoriteStocks({
        variables: { username: "your-username", stockSymbol: symbol },
      });
      // Update your UI with the new favorite stocks
      setFavoriteStock(data.updateFavoriteStocks.favoriteStocks);
    } catch (err) {
      console.error(err);
    }
  };

  return data.stocks.map((stock) => (
    <div key={stock.symbol} onClick={() => handleStockClick(stock.symbol)}>
      <button
        key={stock.symbol}
        onClick={() => handleFavoriteClick(stock.symbol)}
      >
        {favoriteStock.includes(stock.symbol) ? "Unfavorite" : "Favorite"}
      </button>
      <h3>
        {stock.name} ({stock.symbol})
      </h3>
      ...
    </div>
  ));
}
