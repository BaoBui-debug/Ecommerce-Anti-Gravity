const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fact = new Schema({
    name: {type: String, default:'name is undefined'},
    information: {type: String, default:'no information'}
  });

module.exports = mongoose.model('Fact', Fact);