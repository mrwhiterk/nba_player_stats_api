const express = require('express');
const router = express.Router();
const PlayerRoutes = require('./players');

router.use('/players', PlayerRoutes);

module.exports = router;
