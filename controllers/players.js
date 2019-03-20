const { Player } = require("../models/index");

module.exports = {
  index: (req, res) => {
    Player.find({}).then(players => {
      res.json(players);
    });
  },

  show: (req, res) => {
    Player.find({ _id: req.params.id }).then(player => {
      res.json(player);
    });
  },

  create: (req, res) => {
    Player.create(req.body).then(player => res.json(player));
  },

  delete: (req, res) => {
    Player.findByIdAndRemove({ _id: req.params.id }).then(player => {
      res.json(player);
    });
  }
};
