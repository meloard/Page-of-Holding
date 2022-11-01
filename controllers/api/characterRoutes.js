const router = require("express").Router();
const Character = require("../../models/character");

router.get("/", async (req, res) => {
  try {
    const charData = await Character.findAll();
    res.status(200).json(charData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const charData = await Character.findByPk(req.params.id);
    if (!charData) {
      res.status(404).json({ message: "Character not found!" });
      return;
    }
    res.status(200).json(charData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const characterData = await Character.create(req.body);
    res.status(200).json({ msg: `${this.first_name} was created!` });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong. Please try again." });
  }
});

router.put("/:char_id", async (req, res) => {
  try {
    const updateCharData = await Character.update(
      { ...req.body },
      {
        where: {
          char_id: req.params.char_id,
        },
      }
    );
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong. Please try again." });
  }
});

module.exports = router;
