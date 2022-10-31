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


const charRoutes = require('./characterRoutes');
router.use('/Character', characterRoutes );

const classRoutes = require('./classRoutes');
router.use('/Class', classRoutes);

const inventoryRoutes = require('./inventoryRoutes');
router.use('Inventory', inventryRoutes);

const partyRoutes = require('./partyRoutes');
router.use('/Party', partyRoutes);

const raceRoutes = require('./raceRoutes');
router.use('/Race', raceRoutes);

const userRoutes = require('./userRoutes');
router.use('/User', userRoutes);

module.exports = router;
