const { connect, connection } = require('mongoose');

// const connectionString = process.env.JAWSDB_URL || 'mongodb://127.0.0.1:27017/taking-stockDB';

connect('mysql://nz7mqvw26aq6140j:z6ta3gxuyk4sjlzt@acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nl9lv15hptv4ycwd');

module.exports = connection;
