
const router = require("express").Router();

const characterRoutes = require("./characterRoutes");
const userRoutes = require("./userRoutes");
const partyRoutes = require("./partyRoutes");

router.use("./character", characterRoutes);
router.use("./user", userRoutes);
router.use("./party", partyRoutes);

module.exports = router;