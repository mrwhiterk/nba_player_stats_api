const mongoose = require("../db/connection");

module.exports = {
  Players: mongoose.model("Player", require("./players"))
};
