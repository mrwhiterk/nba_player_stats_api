const mongoose = require("../db/connection");

module.exports = {
  Players: mongoose.model("Player", require("./Players"))
  //   Teams: mongoose.model("Team", require("./team"))
};
