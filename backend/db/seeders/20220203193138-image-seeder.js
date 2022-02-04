"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          url: "",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "",
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "",
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "",
          spotId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "",
          spotId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*--------------------------------------------------------------------*/
        {
          url: "",
          spotId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "",
          spotId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
