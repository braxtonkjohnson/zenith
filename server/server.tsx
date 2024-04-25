const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Assuming you have a separate file for user routes

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://indigo:xQpurplepalaceqX1!@cluster0.4addy.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/auth', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

