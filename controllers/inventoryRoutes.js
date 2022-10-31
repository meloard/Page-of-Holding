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

  router.post('/', async (req, res) => {
    try{
      const inventoryData = await Inventory.create(req.body);
      res.status(200).json({msg: `The item was acquired!`});
    }catch(err){
      res.status(400).json({msg:'Something went wrong. Please try again.'});
    }
  });

  module.exports = router;
