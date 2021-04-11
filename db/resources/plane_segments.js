const { getIdentityByEmail } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');

  return [
    {
      identity: bogdan,
      name: 'Outbound Flight - First leg',
      takeoff_time: 1619680200000,
      takeoff_airport: 'OTP',
      land_time: 1619685600000,
      land_airport: 'FRA',
      timezone_origin_vs_destination: 1
    },
    {
      identity: bogdan,
      name: 'Outbound Flight - Second leg',
      takeoff_time: 1619703600000,
      takeoff_airport: 'FRA',
      land_time: 1619718600000,
      land_airport: 'SJO',
      timezone_origin_vs_destination: 8
    },
    {
      identity: bogdan,
      name: 'Inbound Flight - First leg',
      takeoff_time: 1620761700000,
      takeoff_airport: 'SJO',
      land_time: 1620831600000,
      land_airport: 'FRA',
      timezone_origin_vs_destination: -8
    },
    {
      identity: bogdan,
      name: 'Inbound Flight - Second leg',
      takeoff_time: 1620853200000,
      takeoff_airport: 'FRA',
      land_time: 1620865200000,
      land_airport: 'OTP',
      timezone_origin_vs_destination: -1
    },
  ];
};
