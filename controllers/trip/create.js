const { error } = require('../../functions');
const { Trip } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const trip = await Trip.create(req.body);
  if (!trip) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(trip);
};
