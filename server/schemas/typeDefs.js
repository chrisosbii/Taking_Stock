const typeDefs = `
  type User {
    id: ID!
    username: String!
    email: String!
    favoriteStocks: [Stock]
  }

  type Stock {
    symbol: String!
    name: String!
    price: Float!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    stocks: [Stock]
    stock(symbol: String!): Stock
  }

  type Mutation {
    addUser(username: String!, email: String!): User
    addFavoriteStock(userId: ID!, stockSymbol: String!): User
  }
`;

module.exports = typeDefs;
