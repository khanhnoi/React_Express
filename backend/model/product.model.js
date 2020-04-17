var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: String,
    content:String,
    img:String
  });

  var product = mongoose.model('Product', productSchema, 'products');
module.exports = product;