const typeDefs = `
  type User {
    id: ID!
    username: String!
    email: String!
    favoriteStocks: [Stock]!
  }

  type Stock {
    symbol: String!
    name: String!
    exchange: String!
    mic_code: String!
    currency: String!
    datetime: String!
    timestamp: Int
    open: String!
    high: String!
    low: String!
    close: String!
    volume: String!
    previous_close: String!
    change: String!
    percent_change: String!
    average_volume: String!
    is_market_open: Boolean
    fifty_two_week: FiftyTwoWeek
  }
  
  type FiftyTwoWeek {
    low: String
    high: String
    low_change: String
    high_change: String
    low_change_percent: String
    high_change_percent: String
    range: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    stocks: [Stock]
    stock(symbol: String!): Stock
    stockz(symbol: String!): Stock
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addFavoriteStock(userId: ID!, stockSymbol: String!): User
    removeFavoriteStock(userId: ID!, stockSymbol: String!): User
  }
`;

module.exports = typeDefs;
