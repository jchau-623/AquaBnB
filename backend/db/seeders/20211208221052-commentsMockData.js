'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          storyId: 1,
          userId: 3,
          body: 'Enjoyed my stay here!',
        },
        {
          storyId: 2,
          userId: 1,
          body: "Pavlopetri did not dissapoint. I will be back again!",
        },
        {
          storyId: 1,
          userId: 1,
          body: "The views were pretty awesome. I love fish.",
        },
        {
          storyId: 3,
          userId: 1,
          body: "I was almost eating by a shark but I don't care because I had so much fun!",
        },
        {
          storyId: 4,
          userId: 1,
          body: "I love to pretend I am a fish therefore this was perfect for me!",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
