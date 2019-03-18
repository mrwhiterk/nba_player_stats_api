const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nba-roster");
mongoose.Promise = Promise;
module.exports = mongoose;
