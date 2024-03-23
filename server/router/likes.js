const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { carController } = require('../controllers');

// middleware that is specific to this router

router.put('/:carId', auth(), carController.like);

module.exports = router
