const { Player } = require('../models/index');

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
    Player.find({}).then(players => {
      let results = players.filter(player => {
        return player.personId === req.body.personId;
      });

      if (results.length == 0) {
        Player.create(req.body).then(player => res.json(player));
      } else {
        res.json({ data: 'player already exists' });
      }
    });
  },

  delete: (req, res) => {
    Player.findByIdAndRemove({ _id: req.params.id }).then(player => {
      res.json(player);
    });
  },
};
