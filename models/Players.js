const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Players = new Schema({
  name: String,
  team: String,
  position: String,
  height: String,
  age: String,
  championship: String
});

module.exports = Players;
