const { Attraction } = require('../../models');
const { attractions } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await attractions();
    await Attraction.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert Attractions');
    console.error(err);
  }
};
