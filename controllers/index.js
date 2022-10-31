const router = require('express').Router();


const charRoutes = require('/characterRoutes');
router.use('/Character', characterRoutes );

const classRoutes = require('/classRoutes');
router.use('./Class', classRoutes);

const inventoryRoutes = require('/inventoryRoutes');
router.use('Inventory', inventryRoutes);

const partyRoutes = require('/partyRoutes');
router.use('/Party', partyRoutes);

const raceRoutes = require('/raceRoutes');
router.use('/Race', raceRoutes);

const userRoutes = require('/userRoutes');
router.use('/User', userRoutes);

module.exports = router;