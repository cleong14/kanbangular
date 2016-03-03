'use strict';
module.exports = function(sequelize, DataTypes) {
  var card = sequelize.define('card', {
    CardNumber: DataTypes.INTEGER,
    Title: DataTypes.STRING,
    Priority: DataTypes.STRING,
    Status: DataTypes.STRING,
    CreatedBy: DataTypes.STRING,
    AssignedTo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return card;
};