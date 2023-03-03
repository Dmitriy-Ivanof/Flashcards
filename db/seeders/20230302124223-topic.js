"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          name: "Beavers group of Elbrus bootсamp SPb",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smart and beautiful",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Interesting in Russia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
