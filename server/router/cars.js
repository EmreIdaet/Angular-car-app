const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { carController } = require('../controllers');

// middleware that is specific to this router

router.get('/', carController.getCars);
router.post('/', auth(), carController.createCar);

router.get('/:carId', carController.getCar);
router.put('/:carId', auth(), carController.like);
router.put('/:carId/edit', auth(), carController.editCar);
router.delete('/:carId/delete', auth(), carController.deleteCar);

// router.get('/my-trips/:id/reservations', auth(), carController.getReservations);

module.exports = router