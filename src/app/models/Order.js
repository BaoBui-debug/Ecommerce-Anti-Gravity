const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    name: {type: String, default:'name not found'},
    img: {type: String, default:'image not found'},
    price: {type: Number, default:'no price'},
    quantity: {type: Number, default:'null'}
  });

module.exports = mongoose.model('Order', Order);