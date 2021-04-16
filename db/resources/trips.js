/* TODO: for all actors, should be the opposite way:
** sthey should hold trip_id, not the other way around
*/

const { getIdentityByEmail } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');
  const oana = await getIdentityByEmail('oana@posedaru.ro');

  return [
    {
      identity: bogdan,
      name: 'Easter in Costa Rica',
      tagline: 'Pura Vida',
      description: 'This time we\'l goo the furthest. We\'ll live in the jungle for 2 weeks. Cheers to that!',
      start_date: 1619669415000,
      end_date: 1620751815000,
      members: [bogdan, oana],
    },
  ];
};
