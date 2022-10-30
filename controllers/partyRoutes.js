const router = require('express').Router();
const Party = require('../models/party');

router.get('/', async (req, res) => {
    try {
      const partyData = await Party.findAll();
      res.status(200).json(partyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const partyData = await Party.findByPk(req.params.id);
      if (!partyData) {
        res.status(404).json({ message: 'Party does not exist' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json({ message: 'no party found' });
    }
  });
