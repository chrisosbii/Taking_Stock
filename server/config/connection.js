const { connect, connection } = require('mongoose');

const connectionString = process.env.JAWSDB_URL || 'mongodb://127.0.0.1:27017/taking-stockDB';

connect(connectionString)

module.exports = connection;
