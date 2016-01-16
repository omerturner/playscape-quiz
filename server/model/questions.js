var mongoose = require('mongoose');

module.exports = mongoose.model('questions', {
  title: String,
  thumb: String
});