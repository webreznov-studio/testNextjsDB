const connection = require('..');
const userSchema = require('../schemas')

const userModel = connection.model('userModel', userSchema, 'audio-user-collection');

module.exports = {
    userModel
};