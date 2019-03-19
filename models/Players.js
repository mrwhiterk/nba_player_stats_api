const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Player = new Schema({
  firstName: String,
  lastName: String,
  personId: String,
  pos: String,
  heightFeet: String,
  heightInches: String,
  dateOfBirthUTC: String,
  yearsPro: String,
  nbaDebutYear: String,
  collegeName: String,
  country: String
});

module.exports = Player;
