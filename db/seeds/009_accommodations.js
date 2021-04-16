const { Accommodation } = require('../../models');
const { accommodations } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await accommodations();
    await Accommodation.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert Accommodations');
    console.error(err);
  }
};
