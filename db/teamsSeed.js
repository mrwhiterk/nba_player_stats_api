const { Team } = require("../models/index");

Team.remove({}).then(_ => {
    Team.insertMany([
        {
            fullName: "WDI Allstars",
            teamRoster: [{
                firstName: "Alex",
                lastName: "Abrines",
                personId: "203518",
                pos: "G-F",
                heightFeet: "6",
                heightInches: "6",
                dateOfBirthUTC: "1993-08-01",
                nbaDebutYear: "2016",
                yearsPro: "0",
                collegeName: "",
                country: "Spain"
            },
            {
                firstName: "Quincy",
                lastName: "Acy",
                personId: "203112",
                pos: "F",
                heightFeet: "6",
                heightInches: "7",
                dateOfBirthUTC: "1990-10-06",
                nbaDebutYear: "2012",
                yearsPro: "4",
                collegeName: "Baylor",
                country: "USA"
            },

            {
                firstName: "Steven",
                lastName: "Adams",
                personId: "203500",
                pos: "C",
                heightFeet: "7",
                heightInches: "0",
                dateOfBirthUTC: "11993-07-20",
                nbaDebutYear: "2013",
                yearsPro: "3",
                collegeName: "Pittsburgh",
                country: "New Zealand"
            }]
        },
        {
            fullName: "Scrum Lords",
            teamRoster: [{
                firstName: "Alex",
                lastName: "Abrines",
                personId: "203518",
                pos: "G-F",
                heightFeet: "6",
                heightInches: "6",
                dateOfBirthUTC: "1993-08-01",
                nbaDebutYear: "2016",
                yearsPro: "0",
                collegeName: "",
                country: "Spain"
            },
            {
                firstName: "Quincy",
                lastName: "Acy",
                personId: "203112",
                pos: "F",
                heightFeet: "6",
                heightInches: "7",
                dateOfBirthUTC: "1990-10-06",
                nbaDebutYear: "2012",
                yearsPro: "4",
                collegeName: "Baylor",
                country: "USA"
            },

            {
                firstName: "Steven",
                lastName: "Adams",
                personId: "203500",
                pos: "C",
                heightFeet: "7",
                heightInches: "0",
                dateOfBirthUTC: "11993-07-20",
                nbaDebutYear: "2013",
                yearsPro: "3",
                collegeName: "Pittsburgh",
                country: "New Zealand"
            }]
        },
        {
            fullName: "React Reactors",
            teamRoster: [{
                firstName: "Alex",
                lastName: "Abrines",
                personId: "203518",
                pos: "G-F",
                heightFeet: "6",
                heightInches: "6",
                dateOfBirthUTC: "1993-08-01",
                nbaDebutYear: "2016",
                yearsPro: "0",
                collegeName: "",
                country: "Spain"
            },
            {
                firstName: "Quincy",
                lastName: "Acy",
                personId: "203112",
                pos: "F",
                heightFeet: "6",
                heightInches: "7",
                dateOfBirthUTC: "1990-10-06",
                nbaDebutYear: "2012",
                yearsPro: "4",
                collegeName: "Baylor",
                country: "USA"
            },

            {
                firstName: "Steven",
                lastName: "Adams",
                personId: "203500",
                pos: "C",
                heightFeet: "7",
                heightInches: "0",
                dateOfBirthUTC: "11993-07-20",
                nbaDebutYear: "2013",
                yearsPro: "3",
                collegeName: "Pittsburgh",
                country: "New Zealand"
            }]
        },
    ]).then(team => {
        console.log(team);
        process.exit();
    });
});