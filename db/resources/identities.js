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
      position: 'Breaker of borders',
      color: '#215f80',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      email: 'oana@posedaru.ro',
      name: 'Oana Posedaru',
      role: 'client',
      password: shhhh,
      active: false,
      confirmed: true,
      position: 'Taker of cares',
      color: '#be4655',
      photo: 'https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg',
    },
  ];
};
