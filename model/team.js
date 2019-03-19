const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    city: String,
    fullName: String,
    teamId: String,
    nickname: String,
    confName: String,
    divName: String

});

module.exports = TeamSchema;

