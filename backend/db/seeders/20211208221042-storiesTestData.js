'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Stories',
      [
        {
          authorId: 2,
          title: "Atlantis",
          subtitle: "An advanced, utopian society and home to the Atlanteans",
          imageUrl: "https://edgy.app/wp-content/uploads/2019/05/underwater-city.jpg",
          body: "Live in the lost and now found city of Atlantis!"
        },
        {
          authorId: 3,
          title: "Pavlopetri",
          subtitle: "Beautiful and mysterious, nobody knows when this city was built",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguRkTnF7jAteVOAsT6RQhtF8h0iOmFAFWqA&usqp=CAU",
          body: "Pavlopetri sank into the waters off the tip of southern Greece 5000 years ago, but now open to tourists!."
        },
        {
          authorId: 2,
          title: "Heracleion",
          subtitle: "Visit the spot where Hercules first stepped onto Egyptian land",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9aQZxYMPWwvz93vG4EC7rtOV3mycJy6xsw&usqp=CAU",
          body: "Where the hero walked is long gone, as archaeologists think the city has been underwater since the 8th Century."
        },
        {
          authorId: 2,
          title: "Baiae",
          subtitle: "The so-called Vegas of Ancient Rome, which now hosts mostly fish",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9J7tKeXbB3-ZUaqJelXVSHH9vMy_ZYIABQ&usqp=CAU",
          body: "You can still act like an ancient Roman and take a trip to Baiae."
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stories', null, {});
  },
};
