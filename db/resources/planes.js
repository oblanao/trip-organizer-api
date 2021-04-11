const { getIdentityByEmail, getPlaneSegmentByName } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');
  const outboundFirstLeg = await getPlaneSegmentByName('Outbound Flight - First leg');
  const outboundSecondLeg = await getPlaneSegmentByName('Outbound Flight - Second leg');
  const inboundFirstLeg = await getPlaneSegmentByName('Inbound Flight - First leg');
  const inboundSecondLeg = await getPlaneSegmentByName('Inbound Flight - Second leg');

  return [
    {
      identity: bogdan,
      name: 'OTP-SJO Roundtrip',
      carrier: 'Lufthansa',
      plane_segments: [outboundFirstLeg, outboundSecondLeg, inboundFirstLeg, inboundSecondLeg],
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
      price: 695,
    },
  ];
};
