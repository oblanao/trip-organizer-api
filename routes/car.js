const { authenticate } = require('../middleware');
const { Car } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/cars', authenticate, Car.readMany);
