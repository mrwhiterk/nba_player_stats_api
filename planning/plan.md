# NBA Player Stats

This project is being made from a simple love of sports. This application can assist users in creating their own unique lineups using players throughout the NBA league.

## Needs

We will need to access player data from NBA Api and store into our local database. We also need to be able to build custom teams from the players in our collection. We need to populate this data in a many to many fashion so multiple teams can have the same players and vice versa.

## Application Models

We are creating two main models:

- MyTeams model

  - title: String,
  - player: {
    Ref to Player model
    }

- MyPlayers model
  - name: String,
  - team: String,
  - position: String,
  - height: String,
  - age: String,
  - championship: String,
  - college: String

## CRUD

- MyTeams model will have full CRUD methods.
- MyPlayers model will have create, read, and delete methods.

## Data Relationship

A team has many players
A player has many teams

## Screenshots

Screenshots of the wire frame and model are attached this directory.

## Deployment

This application will be deployed to Heroku and MondoDB Atlas.

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Mongo](https://www.mongodb.com/) - The Database used
- [NPM](https://www.npmjs.com/) - Dependency Management
