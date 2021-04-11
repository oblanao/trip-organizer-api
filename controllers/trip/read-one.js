const { error } = require('../../functions');
const { Trip } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const trip = await Trip.findById(id);
  if (!trip) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(trip);
};
