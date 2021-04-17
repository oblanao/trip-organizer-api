const { Router } = require('express');
const { errorHandler, fail, notFound, slow } = require('./middleware');
const { accommodation, attraction, car, country, identity, plane, planeSegment, todo, transfer, trip } = require('./routes');

const router = Router();
module.exports = router;

// useful middleware for testing
router.use(fail);
router.use(slow);

// use the router instances defined
router.use(accommodation);
router.use(attraction);
router.use(car);
router.use(country);
router.use(identity);
router.use(plane);
router.use(planeSegment);
router.use(todo);
router.use(transfer);
router.use(trip);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);
