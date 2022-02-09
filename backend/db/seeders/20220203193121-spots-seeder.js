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
          totalOccupancy: 5,
          totalBedrooms: 2,
          totalBathrooms: 2,
          description:
            "Live in the lost and now found city of Atlantis!",
          hasWifi: true,
          hasTV: true,
          hasAC: true,
          hasHeat: true,
          price: 2000,
          postedAt: new Date(),
          // coordinates: "2000",
          hostId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "City",
          name: "Pavlopetri",
          title: "Beautiful and mysterious, nobody knows when this city was built.",
          pets: true,
          totalOccupancy: 12,
          totalBedrooms: 5,
          totalBathrooms: 3,
          description:
            "Pavlopetri sank into the waters off the tip of southern Greece 5000 years ago, but now open to tourists!",
          hasWifi: true,
          hasTV: true,
          hasAC: true,
          hasHeat: true,
          price: 5000,
          postedAt: new Date(),
          // coordinates: 5000,
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
          hasWifi: true,
          hasTV: true,
          hasAC: true,
          hasHeat: true,
          price: 500,
          postedAt: new Date(),
          // coordinates: 500,
          hostId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "City",
          name: "Baiae",
          title: "The so-called Vegas of Ancient Rome, which now hosts mostly fish",
          pets: false,
          totalOccupancy: 15,
          totalBedrooms: 8,
          totalBathrooms: 4,
          description:
            "You can still act like an ancient Roman and take a trip to Baiae.",
          hasWifi: true,
          hasTV: true,
          hasAC: true,
          hasHeat: true,
          price: 3000,
          postedAt: new Date(),
          // coordinates: 3000,
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
