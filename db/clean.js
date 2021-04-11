const connectToMongo = require('../functions/connect');

const { Identity, Todo, Plane, Country, Trip } = require("../models");

const clean = async () => {
  await connectToMongo();

  await Identity.deleteMany({})
  await Todo.deleteMany({})
  await Plane.deleteMany({})
  await Country.deleteMany({})
  await Trip.deleteMany({})
};

(async () => {
  try {
    await clean(); // invoke function
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports.clean = clean;
