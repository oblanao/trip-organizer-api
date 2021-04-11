const { Country } = require('../../models');

const getCountryByName = async (name) => {
  const country = await Country.findOne({ name }).lean();
  return country._id;
};

module.exports = getCountryByName;
