const { authenticate, authorize } = require('../middleware');
const { Trip } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/trips', authenticate, Trip.readMany);
router.get('/trips/:id', authenticate, Trip.readOne);
router.post('/trips', authenticate, authorize('admin'), Trip.create);
router.put('/trips/:id', authenticate, authorize('admin'), Trip.update);
router.delete('/trips/:id', authenticate, authorize('admin'), Trip.remove);
