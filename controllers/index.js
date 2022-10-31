const router = require("express").Router();
const characterRoutes = require("./characterRoutes");
const partyRoutes = require("./partyRoutes");
const userRoutes = require("./userRoutes");

router.use("/", characterRoutes);
router.use("/", partyRoutes);
router.use("/", userRoutes);

module.exports = router;
