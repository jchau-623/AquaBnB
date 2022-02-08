"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          spotId: 2,
          userId: 1,
          rating: 5,
          description:
            "Pavlopetri did not dissapoint. I will be back again!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 1,
          userId: 1,
          rating: 5,
          description:
            "The views were pretty awesome. I love fish.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          userId: 1,
          rating: 5,
          description:
            "I was almost eating by a shark but I don't care because I had so much fun!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 4,
          userId: 1,
          rating: 5,
          description:
            "I love to pretend I am a fish therefore this was perfect for me!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
