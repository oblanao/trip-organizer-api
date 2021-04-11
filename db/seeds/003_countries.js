const { Country } = require('../../models');
const { countries } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await countries();
    await Country.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert countries');
    console.error(err);
  }
};
