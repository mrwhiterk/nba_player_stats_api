const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team");

router.get("/", teamController.index);
router.get("/new", teamController.new);
router.post("/", teamController.create);
router.get("/:id", teamController.show);
router.get("/:id/edit", teamController.edit);
router.put("/:id", teamController.update);
router.delete("/:id", teamController.delete);

module.exports = router;