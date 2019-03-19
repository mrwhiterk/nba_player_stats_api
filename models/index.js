const mongoose = require("../db/connection");

module.exports = {
    Player: mongoose.model("Player", require("./players")),
    Team: mongoose.model("Team", require("./teams"))
};