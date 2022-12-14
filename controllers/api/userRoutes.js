const router = require("express").Router();
const { restore } = require("../../models/user");
const User = require("../../models/user");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: "No user found" });
  }
});

router.post("/", async (req, res) => {
  try {
    const usaerData = await User.create(req.body);
    res.status(200).json({ msg: `${this.first_name} was created!` });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong. Please try again." });
  }
});

router.put("/:user_id", async (req, res) => {
  try {
    const [updateUserData] = await User.update(
      { ...req.body },
      {
        where: {
          user_id: req.params.user_id,
        },
        individualHooks: true,
      }
    );
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong. Please try again." });
  }
});

module.exports = router;
