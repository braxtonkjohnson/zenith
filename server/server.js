"use strict";
require('dotenv').config();
const { Configuration, PlaidApi, Products, PlaidEnvironments} = require('plaid');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Assuming you have a separate file for user routes

const app = express();
const PORT = 8000;

const cors = require('cors');




app.use(bodyParser.json());
app.use(cors());


// MongoDB connection
mongoose.connect('mongodb+srv://indigo:braxton1@cluster0.4addy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
     }).then(() => console.log('MongoDB Connected'))
     .catch(err => console.log (err));

// Routes
app.use('/api', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
