const express = require("express");
const router = express.Router();
const playerController = require("../controllers/players");

router.get("/", playerController.index);
router.get("/:id", playerController.show);
router.post("/", playerController.create);
router.delete("/:id", playerController.delete);

module.exports = router;
