const router = require("express").Router();
const characterRoutes = require('./characterRoutes');
const classRoutes = require('./classRoutes');
const historyRoutes = require('./historyRoutes');
const inventoryRoutes = require('./inventoryRoutes');
const partyRoutes = require('./partyRoutes');
const raceRoutes = require('./raceRoutes');
const userRoutes = require('./userRoutes');

router.use('/', characterRoutes);
router.use('/', classRoutes);
router.use('/', historyRoutes);
router.use('/', inventoryRoutes);
router.use('/', partyRoutes);
router.use('/', raceRoutes);
router.use('/', userRoutes);

module.exports = router;
