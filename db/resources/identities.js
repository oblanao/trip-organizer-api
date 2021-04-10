const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecret');
  return [
    {
      email: 'bogdan@posedaru.ro',
      name: 'Bogdan Posedaru',
      role: 'admin',
      password: shhhh,
      active: true,
      confirmed: true,
    },
    {
      email: 'oana@posedaru.ro',
      name: 'Oana Posedaru',
      role: 'client',
      password: shhhh,
      active: false,
      confirmed: true,
    },
  ];
};
