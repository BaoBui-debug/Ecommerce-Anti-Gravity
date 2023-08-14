const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, default:'name not found'},
    img: {type: String, default:'image not found'},
    price: {type: Number, default:'no price'}
  });

module.exports = mongoose.model('Product', Product);