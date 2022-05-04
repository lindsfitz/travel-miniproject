const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');


// GET route all travellers without associated trips 

router.get('/', async (req, res) => {
    try {
      const travellerData = await Traveller.findAll();
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// GET ONE route single traveller with associated trips

router.get('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.findByPk(req.params.id, {
        include: [{ model: Trip }],
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No driver found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// POST route to add traveller

router.post('/', async (req, res) => {
    try {
      const travellerData = await Traveller.create(req.body);
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

// DELETE route to remove traveller and all associated trips

router.delete('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No library card found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;