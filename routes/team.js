const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team');

<<<<<<< HEAD
router.get("/", teamController.index);
router.get("/:id", teamController.show);
router.put("/:teamId/:playerId", teamController.removeTeamPlayer);
router.post("/", teamController.create);
router.put("/:id", teamController.update);
router.delete("/:id", teamController.delete);
=======
router.get('/', teamController.index);
router.get('/:id', teamController.show);
router.post('/', teamController.create);
router.put('/:id', teamController.update);
router.delete('/:id', teamController.delete);
>>>>>>> upstream/master

module.exports = router;
