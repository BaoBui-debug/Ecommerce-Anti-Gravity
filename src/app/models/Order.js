const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
  name: { type: String, maxLength: 255 },
  img: { type: String, maxLength: 255 },
  alt: { type: String, maxLength: 255 },
  price: { type: Number, maxLength: 255 },
  quantity: { type: Number, maxLength: 255 },
  et: { type: String, maxLength: 255 }
});

module.exports = mongoose.model('Order', Order);