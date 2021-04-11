const { error } = require('../../functions');
const { Trip } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const update = req.body;
  const trip = await Trip.findByIdAndUpdate(id, update);
  if (!trip) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(trip);
};
