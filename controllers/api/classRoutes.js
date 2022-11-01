const router = require('express').Router();
const Class = require('../../models/class');

router.get('/', async (req, res) => {
    try {
      const classData = await Class.findAll();
      res.status(200).json(classData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const classData = await Class.findByPk(req.params.id);
      if (!classData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(classData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try{
      const classData = await Class.create(req.body);
      res.status(200).json({msg: `${this.first_name} was created!`});
    }catch(err){
      res.status(400).json({msg:'Something went wrong. Please try again.'});
    }
  });

  module.exports = router;
