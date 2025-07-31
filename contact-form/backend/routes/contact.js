// import express
const express = require('express');

// router
const router = express.Router();

// import model
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        // if any of the field is missing
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // new message
        const newMessage = new Contact({ name, email, message });
        // wait till saved
        await newMessage.save();

        // success message
        res.status(201).json({ message: "Message sent successfully!" });
    }
    // if error is there
    catch (err) {
        console.error("Error saving message: ", err);
        res.status(500).json({ error: "Server error" });
    }
});

// export router
module.exports = router;