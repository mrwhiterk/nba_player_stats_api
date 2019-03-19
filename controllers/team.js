const { Player, Team } = require("../models/team");

module.exports = {
    index: function (req, res) {
        Team.find({}).then(teams => {
            res.render("index", { teams });
        });
    },
    new: function (req, res) {
        res.render("team/new");
    },
    create: function (req, res) {
        const { fullName } = req.body;
        Team.create({
            fullName
        }).then(team => {
            res.redirect(`/team`);
        });
    },
    show: function (req, res) {
        let teamId = req.params.id;
        Team.findById(teamId).then(team => {
            Player.find({ teamId }).then(player => {
                res.render("team/show", { player, team });
            });
        });
    },
    edit: function (req, res) {
        Team.findById(req.params.id).then(team => {
            res.render("team/edit", { team });
        });
    },
    update: function (req, res) {
        const editTeam = ({
            fullName
        } = req.body);

        Team.findOneAndUpdate({ _id: req.params.id }, { $set: editTeam }).then(
            () => {
                res.redirect("/team");
            }
        );
    },
    delete: function (req, res) {
        Team.deleteOne({ _id: req.params.id }).then(team => {
            res.redirect("/team");
        });
    }
};
