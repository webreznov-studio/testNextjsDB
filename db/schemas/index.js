const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id:  String,
    email: String,
    password:   String,
    isAdmin: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
  });

module.exports = {
    userSchema
};