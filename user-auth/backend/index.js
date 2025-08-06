// import express, mongoose, cors and dotenv
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// use .env variables
dotenv.config();

// create express app
const app = express();

// port
const PORT = process.env.PORT || 5000;

// auth routes
const authRoutes = require("./routes/auth");

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
    console.error("MongoDB connection failed:", err.message);
});