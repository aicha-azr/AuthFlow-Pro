const mongoose = require('mongoose');

// Define Role Schema
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  permissions:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Permission"
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
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    default: '65c7e0f8ecec003eb9e23e6d'
  }
});

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
})

// Create models
const Role = mongoose.model('Role', roleSchema);
const User = mongoose.model('User', userSchema);
const Permission = mongoose.model('Permission', permissionSchema);
module.exports = { User, Role, Permission};