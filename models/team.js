const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Player = require('./player')


const Team = new Schema({
    fullName: String,
    teamRoster: [Player]
});


module.exports = Team;

