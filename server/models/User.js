const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  favoriteStocks: [{
    type: Schema.Types.ObjectId,
    ref: 'Stock'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;