const { PlaneSegment } = require('../../models');
const { planeSegments } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await planeSegments();
    await PlaneSegment.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert Plane Segments');
    console.error(err);
  }
};
