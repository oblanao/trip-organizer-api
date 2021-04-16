const { getIdentityByEmail } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');

  return [
    {
      identity: bogdan,
      type: 'Natural',
      name: 'Arenal Volcano',
      description: 'Amazing and picturesque volcano in the middle of the jungle. Erupted last time in 2005 but its lava kept flowing till 2010.',
      featured_photo: 'https://cdn.getyourguide.com/img/location/596386ba4f4c3.jpeg/88.jpg',
      schedule: null,
      price: 0,
      priority: 5,
      photos: [
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Arenal_volcano._Costa_Rica.jpg',
        'https://www.goworldtravel.com/wp-content/uploads/2013/05/arenal-volcano-e1607702136358.jpg',
        'https://tropicaldiscovery.com/wp-content/uploads/2017/08/lake-iStock-136636751.jpg'
      ],
      gps_coords: {
        type: 'dd',
        value: '10.457998168 -84.701997192'
      },
    }
  ];
};
