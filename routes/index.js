const express = require("express");
const router = express.Router();

router.use("/player", require("./players"));
router.use("/team", require("./team"));


module.exports = router;
