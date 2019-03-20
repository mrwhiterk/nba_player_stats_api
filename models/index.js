const mongoose = require("../db/connection");

module.exports = {
    Player: mongoose.model("Player", require("./player")),
    Team: mongoose.model("Team", require("./team")),
    // User: mongoose.model("user", require("./user"))
};