const mongoose = require('mongoose');

// Define Role Schema
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  permissions: [{
    type: String
  }]
});

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }]
});

// Create models
const Role = mongoose.model('Role', roleSchema);
const User = mongoose.model('User', userSchema);

module.exports = { User, Role };