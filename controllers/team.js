const { Team, Player } = require("../models/index");

module.exports = {
  index: function(req, res) {
    Team.find({}).then(teams => {
      res.json(teams);
    });
  },
  show: function(req, res) {
    Team.findOne({ _id: req.params.id }).then(team => {
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
  removePlayerFromTeam: (req, res) => {
    Team.findOne({ _id: req.params.teamId }).then(team => {
      team.teamRoster = team.teamRoster.filter(
        player => player._id != req.params.playerId
      );
      team.save((err, team) => {
        if (err) console.log(err);
        res.json(team);
      });
    });
  },
  addPlayerToTeam: (req, res) => {
    Team.findOne({ _id: req.params.teamId }).then(team => {
      Player.findOne({ personId: req.params.personId }).then(player => {
        let results = team.teamRoster.filter(
          teamMember => teamMember.personId === player.personId
        );

        if (!results) team.teamRoster = [...team.teamRoster, player];

        team.save((err, team) => {
          if (err) console.log(err);
          res.json(team);
        });
      });
    });
  }
};
