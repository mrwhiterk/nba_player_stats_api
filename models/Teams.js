const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Team = new Schema({
    fullName: String,
});

module.exports = Team;

