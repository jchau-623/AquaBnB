'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@user.io',
          username: 'Demo',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'fake1@fake.com',
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync('fakeuser1'),
        },
        {
          email: 'fake2@fake.com',
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync('fakeuser2'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
      },
      {}
    );
  },
};
