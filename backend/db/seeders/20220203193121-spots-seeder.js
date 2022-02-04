"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          type: "City",
          name: "Atlantis",
          title: "An advanced, utopian society and home to the Atlanteans",
          pets: false,
          totalOccupancy: 2,
          totalBedrooms: 1,
          totalBathrooms: 1,
          description:
            "Live in the lost and now found city of Atlantis!",
          hasWifi: true,
          hasTV: true,
          hasAC: true,
          hasHeat: true,
          price: 12000,
          postedAt: new Date(),
          coordinates: "0.0, 180.0",
          hostId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "City",
          name: "Pavlopetri",
          title: "Beautiful and mysterious, nobody knows when this city was built.",
          pets: true,
          totalOccupancy: 8,
          totalBedrooms: 4,
          totalBathrooms: 1,
          description:
            "Pavlopetri sank into the waters off the tip of southern Greece 5000 years ago, but now open to tourists!",
          hasWifi: true,
          hasTV: false,
          hasAC: true,
          hasHeat: true,
          price: 28000,
          postedAt: new Date(),
          coordinates: 6.6,
          hostId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "City",
          name: "Heracleion",
          title: "Visit the spot where Hercules first stepped onto Egyptian land",
          pets: false,
          totalOccupancy: 2,
          totalBedrooms: 1,
          totalBathrooms: 1,
          description:
            "Where the hero walked is long gone, as archaeologists think the city has been underwater since the 8th Century.",
          hasWifi: false,
          hasTV: false,
          hasAC: false,
          hasHeat: false,
          price: 7000,
          postedAt: new Date(),
          coordinates: 0.0,
          hostId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "City",
          name: "Baiae",
          title: "The so-called Vegas of Ancient Rome, which now hosts mostly fish",
          pets: false,
          totalOccupancy: 14,
          totalBedrooms: 8,
          totalBathrooms: 4,
          description:
            "You can still act like an ancient Roman and take a trip to Baiae.",
          hasWifi: false,
          hasTV: false,
          hasAC: true,
          hasHeat: true,
          price: 16500,
          postedAt: new Date(),
          coordinates: 0.0,
          hostId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
