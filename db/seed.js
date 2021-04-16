const connectToMongo = require('../functions/connect');

const identities = require('./seeds/001_identities');
const todos = require('./seeds/002_todos');
const planeSegments = require('./seeds/006_plane_segments');
const planes = require('./seeds/005_planes');
const countries = require('./seeds/003_countries');
const trips = require('./seeds/004_trips');
const cars = require('./seeds/007_cars');
const transfers = require('./seeds/008_transfers');

const seed = async () => {
  await connectToMongo();

  await identities.seed();
  await todos.seed();
  await planeSegments.seed();
  await planes.seed();
  await countries.seed();
  await trips.seed();
  await cars.seed();
  await transfers.seed();
};

(async () => {
  try {
    await seed(); // invoke function
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports.seed = seed;
