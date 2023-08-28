const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mt = new Schema({
  name: { type: String, maxLength: 255 },
  price: { type: Number, maxLength: 255 },
  rate: {type: Number, maxLength: 255},
  img: { type: String, maxLength: 255 },
  alt: { type: String, maxLength: 255 }
});

module.exports = mongoose.model('Mt', Mt);