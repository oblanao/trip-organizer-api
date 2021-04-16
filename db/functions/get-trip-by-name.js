const { Trip } = require('../../models');

const getCountryByName = async (name) => {
  const trip = await Trip.findOne({ name }).lean();
  return trip._id;
};

module.exports = getCountryByName;
