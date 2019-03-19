const { Team } = require("../models/index");

Team.remove({}).then(_ => {
    Team.insertMany([
        {
            fullName: "WDI Allstars",
        },
        {
            fullName: "Scrum Lords"
        },
        {
            fullName: "React Reactors"
        },
    ]).then(team => {
        console.log(team);
        process.exit();
    });
});