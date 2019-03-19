const mongoose = require('../db/connection');

module.exports = {
    Player: mongoose.model("Player", require("./player")),
    Team: mongoose.model("Team", require("./team"))
};

