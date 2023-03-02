"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: "topicId" });
    }
  }
  Question.init(
    {
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      topicId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Topics",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
