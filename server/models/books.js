'use strict';
module.exports = function(sequelize, DataTypes) {
  var books = sequelize.define('books', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return books;
};