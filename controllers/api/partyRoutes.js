const router = require("express").Router();
const Party = require("../../models/party");

router.get("/", async (req, res) => {
  try {
    const partyData = await Party.findAll();
    res.status(200).json(partyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const partyData = await Party.findByPk(req.params.id);
    if (!partyData) {
      res.status(404).json({ message: "Party does not exist" });
      return;
    }
    res.status(200).json(partyData);
  } catch (err) {
    res.status(500).json({ message: "no party found" });
  }
});

router.post("/", async (req, res) => {
  try {
    const partyData = await Party.create(req.body);
    res.status(200).json({ msg: `Your party was created!` });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong. Please try again." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatePartyData = await Party.update(
      { ...req.body },
      {
        where: {
          party_id: req.params.id,
        },
      }
    );
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong. Please try again." });
  }
});

module.exports = router;
