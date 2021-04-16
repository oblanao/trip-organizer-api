const { getIdentityByEmail, getTripByName } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');

  return [
    {
      identity: bogdan,
      trip: getTripByName('Easter in Costa Rica'),
      type: 'AirBNB',
      name: 'La Fortuna House',
      url : 'https://www.airbnb.com.ro/rooms/43802637',
      description: 'La Fortuna Home with Garden and Volcano Views. If the weather is good.',
      featured_photo: 'https://a0.muscache.com/im/pictures/435d6a27-1f5e-4542-8dfa-b8d52a2409bc.jpg?im_w=1440',
      photos: [
        'https://a0.muscache.com/im/pictures/60c2e971-1c8e-4bc4-a9a4-7e1982dea60b.jpg?im_w=1440',
        'https://a0.muscache.com/im/pictures/0a0ef93e-18f8-48db-a6a7-e00464c3b811.jpg?im_w=1440',
        'https://a0.muscache.com/im/pictures/21c6f85e-5ba1-4c8a-a6b8-86c230992e99.jpg?im_w=1440'
      ],
      reviews: {
        total_score: 4.93,
        max_score: 5,
        number_reviews: 14
      },
      review_excerpts: [
        'We loved our visit in La Fortuna. The house was in a great location and we found it easy to get to the local restaurants and activities. Vanessa was amazing and helped us',
        'It‘s a very nice house with a good location. Vanessa always responded very quickly and knew everything around the area we needed to know.',
        'We enjoyed our stay on at this property in La Fortuna. The aircon in the bedrooms worked well and the common areas never felt too hot without it.'
      ],
      total_nights: 6,
      price: 703.27,
      room_type: 'entire_place',
      gps_coords: {
        type: 'dd',
        value :'10.47089 -84.64535'
      },
      features: []
    }
  ];
};
