const { authenticate } = require('../middleware');
const { Plane } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/planes', authenticate, Plane.readMany);
