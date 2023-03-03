'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Topics',
      [
        {
          name: 'Группа Бобры Elbrus bootсamp SPb',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Умные и красивые',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Кто эти люди?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
