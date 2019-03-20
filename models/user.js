const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
}, { timestamps: true });

module.exports = UserSchema;