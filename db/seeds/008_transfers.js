const { Transfer } = require('../../models');
const { transfers } = require('../resources');

exports.seed = async () => {
  try {
    const seeds = await transfers();
    await Transfer.insertMany(seeds);
  } catch (err) {
    console.warn('Error! Cannot insert Transfers');
    console.error(err);
  }
};
