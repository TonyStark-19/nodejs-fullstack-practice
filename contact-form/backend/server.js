// import express
const express = require('express');

// import cors
const cors = require('cors');

// import mongoose
const mongoose = require('mongoose');

// use .env variables
require('dotenv').config();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact'));

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on http://localhost:${process.env.PORT}`);
        });
    })
    .catch(err => console.error("MongoDB connection failed:", err));