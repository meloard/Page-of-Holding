const router = require('express').Router();
const Inventory = require('../models/inventory');

router.get('/', async (req, res) => {
    try {
      const invData = await Inventory.findAll();
      res.status(200).json(invData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const invData = await Inventory.findByPk(req.params.id);
      if (!invData) {
        res.status(404).json({ message: 'inventory unavailable' });
        return;
      }
      res.status(200).json(invData);
    } catch (err) {
      res.status(500).json({ message: "no items found" });
    }
  });

  module.exports = router
