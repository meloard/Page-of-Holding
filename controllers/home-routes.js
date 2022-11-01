const router = require("express").Router();
const { User, Character } = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/user", async (req, res) => {
  res.render("characters");
});

router.get("/user/:id", async (req, res) => {
  try {
    const currChar = await Character.findByPk(req.param.id, {
      where: (active = true),
    });
    res.render("charMain", currChar);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const charList = await Character.findByPk(req.params.id);
    const characters = charList.get({ plain: true });
    res.render("charlist", characters);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
