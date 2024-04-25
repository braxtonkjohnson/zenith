// /models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  assets: {
    type: Array,
    required: false,
    unique: false,
  },
  real_estate: {
    type: Array,
    required: true,
    unique: true
  },
  plaid_access_token: {
    type: String,
    required: false,
    unique: true
  }

});

// Pre-save hook to hash password before saving a new user
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
