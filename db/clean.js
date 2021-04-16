const connectToMongo = require('../functions/connect');

const {
  Accommodation,
  Admin,
  Attraction,
  Car,
  Confirm,
  Country,
  Hash,
  Identity,
  Key,
  Plane,
  PlaneSegment,
  Reset,
  Todo,
  Transfer,
  Trip,
} = require('../models');

const clean = async () => {
  await connectToMongo();

  await Accommodation.deleteMany({});
  await Admin.deleteMany({});
  await Attraction.deleteMany({});
  await Car.deleteMany({});
  await Confirm.deleteMany({});
  await Country.deleteMany({});
  await Hash.deleteMany({});
  await Identity.deleteMany({});
  await Key.deleteMany({});
  await Plane.deleteMany({});
  await PlaneSegment.deleteMany({});
  await Reset.deleteMany({});
  await Todo.deleteMany({});
  await Transfer.deleteMany({});
  await Trip.deleteMany({});
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
