const { Players } = require("../models/index");

module.exports = {
  index: (req, res) => {
    Players.find({}).then(players => {
      res.json(players);
    });
  },
  delete: (req, res) => {
    Players.findByIdAndRemove({ _id: req.params.id }).then(player => {
      res.json(player);
      console.log(player);
    });
  }
};
