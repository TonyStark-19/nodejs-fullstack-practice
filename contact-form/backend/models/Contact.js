// import mongoose
const mongoose = require('mongoose');

// schema for contact form
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true });

// export model
module.exports = mongoose.model('Contact', contactSchema);