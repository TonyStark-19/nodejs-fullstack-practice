// import express: sets up the server and handles routes
const express = require('express');

// import cors: allows your frontend (running on a different port) to access the backend
const cors = require('cors');

// import quotes
const quotes = require('./quotes');

// initializing express app
const app = express();

app.use(cors());

// POST requests
app.use(express.json());

// route to get random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    res.json({ quote });
});

// set port
const PORT = 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});