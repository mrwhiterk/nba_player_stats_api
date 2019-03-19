const express = require("express");
const router = express.Router();

router.use("/player", require("./players"));

module.exports = router;
