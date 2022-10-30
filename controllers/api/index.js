const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const partyRoutes = require('./partyRoutes');
const inventoryRoutes = require('./inventoryRoutes');


router.use('/user', userRoutes);
router.use('/character', characterRoutes);
router.use('/party', partyRoutes);
router.use('/invetory', inventoryRoutes);

module.exports = router;