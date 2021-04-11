const { getIdentityByEmail } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');

  return [
    {
      identity: bogdan,
      name: 'OTP-SJO Roundtrip',
      carrier: 'Lufthansa',
      plane_segments: [],
      included_luggage: {
        /* per trip, for all members */
        num_hand_luggage: 5,
        /* per trip, for all members */
        num_checked_luggage: 1,
        hand_luggage_size: 8,
        cheked_luggage_size: 23,
        luggage_cost: 120,
      },
      included_meal: true,
      price: 695
    },
  ];
};
