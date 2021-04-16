const connectToMongo = require('../functions/connect');

const identities = require('./seeds/001_identities');
const countries = require('./seeds/003_countries');
const todos = require('./seeds/002_todos');
const planeSegments = require('./seeds/006_plane_segments');
const planes = require('./seeds/005_planes');
const trips = require('./seeds/004_trips');
const cars = require('./seeds/007_cars');
const transfers = require('./seeds/008_transfers');
const accommodations = require('./seeds/009_accommodations');
const attractions = require('./seeds/010_attractions');

const seed = async () => {
  await connectToMongo();

  // await identities.seed();
  // await trips.seed();
  await countries.seed();
  // await planeSegments.seed();
  // await planes.seed();
  // await cars.seed();
  // await transfers.seed();
  // await accommodations.seed();
  // await attractions.seed();
  // await todos.seed();
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
