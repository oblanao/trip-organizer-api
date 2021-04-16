const { Car } = require('../../models');
const { cars } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await cars();
    await Car.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert Cars');
    console.error(err);
  }
};
