var mongoose = require('mongoose');

module.exports = mongoose.model('questions', {
  name: String,
  completed: { type: Boolean, default: false }
});