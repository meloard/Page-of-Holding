const router = require("express").Router();


const charRoutes = require('./characterRoutes');
router.use('/Character', charRoutes );

const classRoutes = require('./classRoutes');
router.use('/Class', classRoutes);

const inventoryRoutes = require('./inventoryRoutes');
router.use('/Inventory', inventoryRoutes);

const partyRoutes = require('./partyRoutes');
router.use('/Party', partyRoutes);

const userRoutes = require('./userRoutes');
router.use('/User', userRoutes);

module.exports = router;
