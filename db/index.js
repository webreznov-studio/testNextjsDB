const mongoose = require('mongoose');

const uri = process.env.URI_CONNECT_DATABASE;

const connection = mongoose.createConnection(uri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

module.exports = connection;