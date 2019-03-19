const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    fullName: String,
});

module.exports = TeamSchema;

