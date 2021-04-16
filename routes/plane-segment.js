const { authenticate } = require('../middleware');
const { PlaneSegment } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/plane-segments', authenticate, PlaneSegment.readMany);
