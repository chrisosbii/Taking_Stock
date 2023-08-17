const { User, Stock } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      // Find and return all users from the database
      return await User.find();
    },
    user: async (parent, args, context) => {
      console.log(context)
      // Find and return a single user by ID
      //return await User.findById(args.id);

      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('favoriteStocks');
      }
      throw AuthenticationError;
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
    addUser: async (parent, { username, email, password }, context) => {
      // Create a new user and save it to the database
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    // will use context user's id to find one user and then add a stock id to the favorite set
    addFavoriteStock: async (parent, { stockId }, context) => {
      console.log(`trying to add ${stockId} to ${context.user.username}`);
      if (context.user) {
        const stock = await Stock.findOne({ _id: stockId });
        const user = await User.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: { favoriteStocks: stock._id } }
        );
          console.log(`updated ${user.username} and added ${stockId}`);
        return user;
      }
      throw AuthenticationError;
    },
    // will use context user's id to find one user and then add a stock id to the favorite set
    removeFavoriteStock: async (parent, { stockId }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          {_id: context.user._id},
          { $pull: { favoriteStocks: stockId } }
        );
        return user;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
