const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerOrder = new Schema({
  Name: { type: String, maxLength: 255 },
  Phone: { type: Number, maxLength: 255 },
  Address: { type: String, maxLength: 500 },
  Email: { type: String, maxLength: 255 },
  noteFromCustomer: { type: String, maxLength: 600 },
  //products: { type: Array }
});

module.exports = mongoose.model('Customer', customerOrder);