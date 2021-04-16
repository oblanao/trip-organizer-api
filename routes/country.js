const { authenticate } = require('../middleware');
const { Country } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/countries', authenticate, Country.readMany);
