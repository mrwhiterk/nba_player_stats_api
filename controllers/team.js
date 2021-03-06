const { Team, Player } = require('../models/index');

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
      const removedPlayer = team.teamRoster.find(
        player => player._id == req.params.id
      );

      team.teamRoster = team.teamRoster.filter(
        player => player._id != req.params.id
      );

      team.save((err, team) => {
        if (err) console.log(err);
        if (removedPlayer.firstName) {
          res.json({
            ...team,
            removedPlayer: `Successfully removed ${removedPlayer.firstName} ${
              removedPlayer.lastName
            } from ${team.fullName}`,
          });
        } else {
          res.json(team);
        }
      });
    });
  },
  addPlayerToTeam: (req, res) => {
    Team.findOne({ _id: req.params.teamId }).then(team => {
      Player.findOne({ _id: req.params.id }).then(player => {
        let teamIsFull = team.teamRoster.length >= 12;

        let results = team.teamRoster.filter(teamMember => {
          return teamMember.personId === player.personId;
        });

        if (results.length == 0 && !teamIsFull) {
          team.teamRoster = [...team.teamRoster, player];
        }

        team.save((err, team) => {
          if (err) console.log(err);
          if (teamIsFull) {
            res.json({
              ...team,
              full: `${team.fullName} is full`,
            });
          } else if (results.length > 0) {
            res.json({
              ...team,
              error: `${player.firstName} ${player.lastName} is already on ${
                team.fullName
              }`,
            });
          } else {
            res.json({
              ...team,
              success: `Successfully added ${player.firstName} ${
                player.lastName
              } to ${team.fullName}`,
            });
          }
        });
      });
    });
  },
  startPlayer: (req, res) => {
    Team.findOne({ _id: req.params.teamId }).then(team => {
      Player.findOne({ personId: req.params.personId }).then(player => {
        var person = team.teamRoster.find(p => p.personId == player.personId);

        person.isStarter = '1';

        team.save((err, team) => {
          if (err) console.log(err);
          res.json(person);
        });
      });
    });
  },
  removeStarterPlayer: (req, res) => {
    Team.findOne({ _id: req.params.teamId }).then(team => {
      Player.findOne({ personId: req.params.personId }).then(player => {
        var person = team.teamRoster.find(p => p.personId == player.personId);

        person.isStarter = '0';

        team.save((err, team) => {
          if (err) console.log(err);
          res.json(person);
        });
      });
    });
  },
};
