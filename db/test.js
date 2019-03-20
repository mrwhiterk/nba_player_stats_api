const { Team } = require("../models/index");

Team.find({}).then(teams => {
  teams.map(team => {
    console.log(team);
  });
});

//   .populate("teamRoster")
//   .exec(function(err, teams) {
//     if (err) return handleError(err);
//     console.log(teams);
//   });
