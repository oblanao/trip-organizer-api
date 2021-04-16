const { authenticate } = require('../middleware');
const { Accommodation } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/accommodations', authenticate, Accommodation.readMany);
