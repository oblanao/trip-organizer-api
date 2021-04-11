const { Router } = require('express');
const { errorHandler, fail, notFound, slow } = require('./middleware');
const { identity, todo, trip } = require('./routes');

const router = Router();
module.exports = router;

// useful middleware for testing
router.use(fail);
router.use(slow);

// use the router instances defined
router.use(identity);
router.use(todo);
router.use(trip);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);
