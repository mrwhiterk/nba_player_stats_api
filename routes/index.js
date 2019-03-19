const express = require("express");
const router = express.Router();
const { Players } = require("../models/index");

router.get("/", (req, res) => {
  res.send("Hello World working");
});

module.exports = router;
