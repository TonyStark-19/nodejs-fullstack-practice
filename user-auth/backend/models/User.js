// import mongoose
const { request } = require("express");
const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// export schema
module.exports = mongoose.model("User", UserSchema);