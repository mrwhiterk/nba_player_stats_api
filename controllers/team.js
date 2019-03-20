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
    console.log(req.body);
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
  getTeamPlayer: (req, res) => {
    Team.find({ _id: req.params.id }).then(player => {
      player.map(roster => {
        res.json(roster.teamRoster[0].id);
        console.log(roster.teamRoster[0].id);
      });
    });
    // Team.find({ _id: req.params.id })
    //   .where(teamRoster[0].firstName)
    //   .equals("Alex")
    //   .then(player => {
    //     res.json(player);
    //     console.log(player);
    //   });
  }
};
