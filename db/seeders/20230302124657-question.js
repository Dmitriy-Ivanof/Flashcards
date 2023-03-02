"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Сколько преподавателей было у группы Бобры?",
          answer: "4",
          topicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Сколько Максимов в группе Бобры?",
          answer: "3",
          topicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Сколько человек с именем дима в группе Бобры?",
          answer: "3",
          topicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "Содержание пчел в Бобрах?",
          answer: "9",
          topicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "Что самое трудное было в аудитории Бобров?",
          answer: "не замерзнуть",
          topicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Мальнькая и сморщенная, есть у каждой женщины?",
          answer: "изюменка",
          topicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Где у женщин волосы самые кудрявые?",
          answer: "в Африке",
          topicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Чего у женщины 2, а у коровы 4?",
          answer: "ноги",
          topicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что должно в течении 24 часов прийти, но не приходит?",
          answer: "завтра",
          topicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "У одних мужчин длиннее, а у других короче. Их жены используют это?",
          answer: "фамилия",
          topicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
