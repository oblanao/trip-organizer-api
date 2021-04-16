const { getIdentityByEmail } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');

  return [
    {
      identity: bogdan,
      name: 'Hyundai Tucson Nebun',
      url: 'https://wild-rider.com/4x4-budget-car-rental/hyundai-tucson',
      brand: 'Hyundai',
      model: 'Tucson',
      description: '4x4 Vehicle, 5 passengers, room for luggage.',
      features: [],
      featured_photo: 'https://res.cloudinary.com/dhecvv6w3/image/upload/v1596493074/20200702_083919_0c540cd3a7.jpg'
    }
  ];
};
