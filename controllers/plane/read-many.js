const { error } = require('../../functions');
const { Plane } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const trips = await Plane.find({});
  if (!trips) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(trips);
};
