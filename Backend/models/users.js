const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  schoolName: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  subject: {
    type: [String],
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
