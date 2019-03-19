const mongoose = require('../db/connection');

module.exports = {
  Player: mongoose.model('Player', require('./players')),
};
