'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    // static async arrTop() {
    //   const arrTopics = await Topic.findAll();
    //   return arrTopics;
    // }
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'topicId' });
    }
  }
  Topic.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Topic',
    }
  );
  return Topic;
};
