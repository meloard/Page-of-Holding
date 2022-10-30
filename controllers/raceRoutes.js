const router = require('express').Router();
const Race = require('../models/race');

router.get('/', async (req, res) => {
    try {
      const raceData = await Race.findAll();
      res.status(200).json(raceData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const raceData = await Race.findByPk(req.params.id);
      if (!raceData) {
        res.status(404).json({ message: 'No race detected' });
        return;
      }
      res.status(200).json(raceData);
    } catch (err) {
      res.status(500).json(err);
    }
  });