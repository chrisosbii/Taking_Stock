const { User, Stock } = require('../models');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      // Find and return all users from the database
      return await User.find();
    },
    user: async (parent, args, context) => {
      // Find and return a single user by ID
      return await User.findById(args.id);
    },
    stocks: async (parent, args, context) => {
      // Find and return all stocks from the database
      return await Stock.find();
    },
    stock: async (parent, args, context) => {
      // Find and return a single stock by symbol
      return await Stock.findOne({ symbol: args.symbol });
    },
  },
  Mutation: {
    addUser: async (parent, args, context) => {
      // Create a new user and save it to the database
      const user = new User(args);
      await user.save();
      return user;
    },
    addFavoriteStock: async (parent, args, context) => {
      // Find the user and stock by ID
      const user = await User.findById(args.userId);
      const stock = await Stock.findOne({ symbol: args.stockSymbol });

      // Add the stock to the user's favorite stocks
      user.favoriteStocks.push(stock);
      await user.save();

      // Return the updated user
      return user;
    },
  },
};

module.exports = resolvers;
