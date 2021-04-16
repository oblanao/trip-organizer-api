const { authenticate } = require('../middleware');
const { Transfer } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/transfers', authenticate, Transfer.readMany);
