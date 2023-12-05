// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// Content.js
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  data: { type: Object, required: true },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
