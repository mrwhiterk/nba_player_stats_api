const mongoose = require("../db/connection");

module.exports = {
  Players: mongoose.model("Player", require("./player")),
  Teams: mongoose.model("Team", require("./team"))
};
