const { getIdentityByEmail } = require('../functions');

module.exports = async () => {
  const bogdan = await getIdentityByEmail('bogdan@posedaru.ro');
  const oana = await getIdentityByEmail('oana@posedaru.ro');

  return [
    {
      identity: bogdan,
      name: 'Make a todo list',
      done: true,
    },
    {
      identity: bogdan,
      name: 'Make a pre-departure checklist',
      done: false,
    },
    {
      identity: oana,
      name: 'Make sure passports are ready',
      done: false,
    },
    {
      identity: bogdan,
      name: 'Tell Ketchup to make some sauce',
      done: false,
    },
    {
      identity: oana,
      name: 'Teeeeeell hiiiiiim..',
      done: true,
    },
  ];
};
