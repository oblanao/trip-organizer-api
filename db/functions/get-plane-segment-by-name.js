const { PlaneSegment } = require('../../models');

const getPlaneSegmentByName = async (name) => {
  const planeSegment = await PlaneSegment.findOne({ name }).lean();
  return planeSegment._id;
};

module.exports = getPlaneSegmentByName;
