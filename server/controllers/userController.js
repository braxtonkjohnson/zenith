// /controllers/userController.js
require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const userRoutes = require('../routes/userRoutes')
const jwt = require('jsonwebtoken')



// Register a new user
exports.registerUser = async (req, res) => {
  const { username, password, first_name, last_name, email, phone } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create and save the new user
    const user = new User({
    username, 
    password,
    first_name,
    last_name,
    email,
    phone
    });
    await user.save();

    const token = jwt.sign({
      user: user._id 
    }, process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      httpOnly: true,
    }).status(200).json({message: 'User created successfully'}) 
    .send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Authenticate a user
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Respond with success (you might want to generate a token here)
    const token = jwt.sign({
      user: user._id 
    }, process.env.JWT_SECRET
    );


    //Send token as a HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
    }).status(200).json({message: 'Login Successful'}) 
    .send();

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.onboardUser = async (req, res) => {
  const { plaid_access_token } = User.findOneAndUpdate({
    plaid_access_token
  })

}
