const { Trip } = require('../../models');
const { trips } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await trips();
    await Trip.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert trips');
    console.error(err);
  }
};
