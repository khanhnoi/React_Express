var mongoose = require('mongoose');
var userModel = new mongoose.Schema({
    name: String,
    address: String
  });

var User = mongoose.model('user', userModel,'bang1');
module.exports = User