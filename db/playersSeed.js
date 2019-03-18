const Player = require("../models/index");

Player.remove({}).then(_ => {
  Player.insertMany([
    {
      name: "Neftali",
      team: "Lakers",
      position: "Shooting Guard",
      height: "5'9",
      age: "31",
      championship: "1"
    }
  ]).then(player => {
    console.log(player);
    process.exit();
  });
});
