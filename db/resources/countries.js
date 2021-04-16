const { getIdentityByEmail, getTripByName } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');

  return [
    {
      identity: bogdan,
      trip: getTripByName('Easter in Costa Rica'),
      name: 'Costa Rica',
      description:
        'A very friendly, developed but eco-aware country, Costa Rica is well known for its lush rainforests, for its bio-diverisity, for its sunny beaches and of course, the renowned Costa Rican Coffee.',
      flag: 'https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png',
      gps_coords: {
        type: 'dd',
        value: '9.6301892 -84.2541844',
      },
      population: 5084000,
      climate: {},
      featured_photo:
        'https://deih43ym53wif.cloudfront.net/arenal-volcano-costa-rica-shutterstock_1337924888_ba3a50b8f9.jpeg',
      photos: [
        'https://a.storyblok.com/f/89778/1168x728/b7082a9dd9/cr_00_00_2.jpeg',
        'https://www.volunteeringsolutions.com/asset/uploads/img/page_header_image/costa_rica/san_jose/651/651_costarica.jpg',
        'https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2019/05/Ref2391/Ref2391.jpg/thumbnails/1200x600',
        'https://www.contiki.com/v-ch1ay0z8ajc0/-/media/tours/hero-images/latin-america/viva-costa-rica/viva-costa-rica.jpg',
      ],
      immigration_requirements: {
        visa_required: false,
        maximum_stay: 90,
        visa_complications: 2, /* on a scale from 1 to 5 */
        visa_cost: 0,
        passport_required: true
      },
      covid_requirements: {
        pcr_test_required_go: false,
        pcr_test_required_return: false,
        pcr_max_before: 0, /* value in hours */
        covid_cost: 130, /* in euro per person */
      }
    },
  ];
};
