const { authenticate } = require('../middleware');
const { Attraction } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/attractions', authenticate, Attraction.readMany);
