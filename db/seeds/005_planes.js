const { Plane } = require('../../models');
const { planes } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await planes();
    await Plane.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert planes');
    console.error(err);
  }
};
