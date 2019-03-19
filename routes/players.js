const express = require("express");
const router = express.Router();
const controller = require("../controllers/players");

router.get("/", controller.index);
router.delete("/:id", controller.delete);

module.exports = router;
