const { getIdentityByEmail } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');

  return [
    {
      identity: bogdan,
      self_drive: true,
      duration: 180,
      total_km: 4.2,
      start_name: 'SJO Airport',
      end_name: 'Bamboo ApartHotel',
      start_gps_coords: {
        type: 'dd',
        value: '9.989496042 -84.205165846'
      },
      end_gps_coords: {
        type: 'dd',
        value: '10.01625 -84.21163'
      },
    },
  ];
};
