import Auth from "../utils/auth";

export default function UserProfile() {
  const profile = Auth.getProfile().authenticatedPerson;
  const { username, favoriteStocks, email } = profile;

  return (
    <div className="user-profile">
      <h2>{username}'s Profile</h2>
      <h3>Favorite Stocks</h3>
      <ul>
        {favoriteStocks ? (
          favoriteStocks.map((stock) => (
            <li key={stock.symbol}>
              {stock.name} ({stock.symbol})
            </li>
          ))
        ) : (
          <button>Lets favorite some Stocks</button>
        )}
      </ul>
    </div>
  );
}
