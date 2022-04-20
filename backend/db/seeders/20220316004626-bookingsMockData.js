'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Bookings',
      [
        {
          userId: 1,
          listingId: 5,
          startDate: '2022-04-16',
          endDate: '2022-04-20',
          days: 4,
          total: 5000,
          spotImageUrl:
            'https://disney.fandom.com/wiki/Great_Barrier_Reef?file=Coral_Reef.jpg',
          spotPricePerNight: 1250,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bookings', null, {});
  },
};
