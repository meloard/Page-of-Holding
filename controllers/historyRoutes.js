const router = require('express').Router();
const History = require('../models/history');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try{
      const historyData = await History.create(req.body);
      res.status(200).json({msg: `${this.first_name} was created!`});
    }catch(err){
      res.status(400).json({msg:'Something went wrong. Please try again.'});
    }
  });

  router.put('/:id', async (req, res) => {
    try{
      const updateHistoryData = await History.update({
        //history params that can be changed(no history model atm)
      },
      {
        where: {
          history_id:req.params.history_id
        }
      }
      );
    }catch(err){
      res.status(400).json({msg: 'Something went wrong. Please try again.'});
    };
  });