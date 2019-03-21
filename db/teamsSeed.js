const { Team } = require("../models/index");

Team.remove({}).then(_ => {
  Team.insertMany([
    {
      fullName: "WDI Allstars",
      teamRoster: [
        {
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
        }
      ]
    },
    {
      fullName: "Scrum Lords",
      teamRoster: [
        {
          firstName: "Arron",
          lastName: "Afflalo",
          personId: "201167",
          pos: "G",
          heightFeet: "6",
          heightInches: "5",
          dateOfBirthUTC: "1985-10-15",
          nbaDebutYear: "2007",
          yearsPro: "9",
          collegeName: "UCLA",
          country: "USA"
        },
        {
          firstName: "Alexis",
          lastName: "Ajinca",
          personId: "201582",
          pos: "C",
          heightFeet: "7",
          heightInches: "2",
          dateOfBirthUTC: "1988-05-06",
          nbaDebutYear: "2008",
          yearsPro: "6",
          collegeName: "Saint Etienne, France",
          country: "France"
        },

        {
          firstName: "Cole",
          lastName: "Aldrich",
          personId: "202332",
          pos: "C",
          heightFeet: "6",
          heightInches: "11",
          dateOfBirthUTC: "1988-10-31",
          nbaDebutYear: "2010",
          yearsPro: "6",
          collegeName: "Kansas",
          country: "USA"
        }
      ]
    },
    {
      fullName: "React Reactors",
      teamRoster: [
        {
          firstName: "LaMarcus",
          lastName: "Aldridge",
          personId: "200746",
          pos: "F",
          heightFeet: "6",
          heightInches: "11",
          dateOfBirthUTC: "1985-07-19",
          nbaDebutYear: "2006",
          yearsPro: "10",
          collegeName: "Texas",
          country: "USA"
        },
        {
          firstName: "Lavoy",
          lastName: "Allen",
          personId: "202730",
          pos: "F-C",
          heightFeet: "6",
          heightInches: "9",
          dateOfBirthUTC: "1989-02-04",
          nbaDebutYear: "2011",
          yearsPro: "5",
          collegeName: "Temple",
          country: "USA"
        },

        {
          firstName: "Tony",
          lastName: "Allen",
          personId: "2754",
          pos: "G-F",
          heightFeet: "6",
          heightInches: "4",
          dateOfBirthUTC: "1982-01-11",
          nbaDebutYear: "2004",
          yearsPro: "12",
          collegeName: "Oklahoma State",
          country: "USA"
        }
      ]
    }
  ]).then(team => {
    console.log(team);
    process.exit();
  });
});
