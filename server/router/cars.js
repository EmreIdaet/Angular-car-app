const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { carController } = require('../controllers');

// middleware that is specific to this router

router.get('/', carController.getCars);
router.post('/', carController.createCar);

router.get('/:carId', carController.getCar);
router.put('/:carId',  carController.like);
router.put('/:carId/edit',  carController.editCar);
router.delete('/:carId/delete',  carController.deleteCar);

// router.get('/my-trips/:id/reservations', auth(), carController.getReservations);

module.exports = router