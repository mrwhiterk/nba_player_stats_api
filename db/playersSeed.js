const { Players } = require("../models/index");

Players.remove({}).then(_ => {
  Players.insertMany([
    {
      name: "Neftali",
      team: "Washington Wizards",
      position: "Shooting Guard",
      height: "5'9",
      age: "31",
      championship: "1"
    },
    {
      name: "Josh",
      team: "Washington Wizards",
      position: "Point Guard",
      height: "5'9",
      age: "31",
      championship: "1"
    },
    {
      name: "Ryan",
      team: "Washington Wizards",
      position: "Power Forward",
      height: "5'9",
      age: "31",
      championship: "1"
    },
    {
      name: "Bryan",
      team: "Washington Wizards",
      position: "Center",
      height: "5'9",
      age: "31",
      championship: "1"
    }
  ]).then(player => {
    console.log(player);
    process.exit();
  });
});
