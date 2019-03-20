const { Team } = require("../models/index");

module.exports = {
  index: function(req, res) {
    Team.find({}).then(teams => {
      res.json(teams);
    });
  },

  show: (req, res) => {
    Team.find({ _id: req.params.id }).then(team => {
      res.json(team);
    });
  },
  create: (req, res) => {
    Team.create(req.body).then(team => res.json(team));
  },
  update: (req, res) => {
    Team.findOne({ _id: req.params.id }).then(team => {
      team.fullName = req.body.fullName;
      team.save((err, team) => {
        res.json(team);
      });
    });
  },
  delete: function(req, res) {
    Team.findByIdAndRemove({ _id: req.params.id }).then(team => {
      res.json(team);
    });
  },
  removeTeamPlayer: (req, res) => {
    Team.findOne({ _id: req.params.teamId }).then(team => {
      team.teamRoster = team.teamRoster.filter(
        player => player._id != req.params.playerId
      );
      team.save((err, team) => {
        if (err) console.handle(err);
        res.json(team);
      });
    });
  }
};
