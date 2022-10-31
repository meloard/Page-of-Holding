const router = require('express').Router();
const Character = require('./models/character');

router.get('/', async (req, res) => {
    try {
      const charData = await Character.findAll();
      res.status(200).json(charData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const charData = await Character.findByPk(req.params.id);
      if (!charData) {
        res.status(404).json({ message: 'Character not found!' });
        return;
      }
      res.status(200).json(charData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
