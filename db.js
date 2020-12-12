const mongoose = require('mongoose');
const { Schema } = mongoose;

const uri = process.env.URI_CONNECT_DATABASE;
const connection = mongoose.createConnection(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new Schema({
  id:  String,
  email: String,
  password:   String,
  isAdmin: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});
const userModel = connection.model('userModel', userSchema, 'audio-user-collection');

module.exports = userModel;