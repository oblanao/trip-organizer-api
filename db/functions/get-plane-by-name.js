const { Plane } = require('../../models');

const getPlaneByName = async (name) => {
  const plane = await Plane.findOne({ name }).lean();
  return plane._id;
};

module.exports = getPlaneByName;
