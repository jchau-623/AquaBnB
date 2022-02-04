"use strict";
// const faker = require("faker");
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Demo User",
          username: "demo-user",
          email: "demo@user.io",
          hashedPassword: bcrypt.hashSync("password"),
          isHost: false,
        },
        {
          name: "Fake User",
          username: "fake-user1",
          email: "fakeuser@gmail.com",
          hashedPassword: bcrypt.hashSync("fakeUserOne"),
          isHost: true,
        },
        {
          name: "Really Fake",
          username: "reallyfake",
          email: "reallyfake@fakex.io",
          hashedPassword: bcrypt.hashSync("fakeUserTwo"),
          isHost: true,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      { username: { [Op.in]: ["demo-user", "fake-user1", "reallyfake"] } },
      {}
    );
  },
};
