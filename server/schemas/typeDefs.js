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
    price: Float!
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addFavoriteStock(userId: ID!, stockSymbol: String!): User
    removeFavoriteStock(userId: ID!, stockSymbol: String!): User
  }
`;

module.exports = typeDefs;
