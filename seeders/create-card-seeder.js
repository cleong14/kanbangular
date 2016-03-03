'use strict';

var faker = require('faker');

var cardCount = 0;

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cards', [
      {
        CardNumber: ++cardCount,
        Title: 'Workout',
        Priority: 'High',
        Status: 'Queue',
        CreatedBy: 'Chaz Leong',
        AssignedTo: 'Chaz Leong',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        CardNumber: ++cardCount,
        Title: 'Put Sealant on Car',
        Priority: 'High',
        Status: 'Queue',
        CreatedBy: 'Chaz Leong',
        AssignedTo: 'Chaz Leong',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        CardNumber: ++cardCount,
        Title: 'Buy Airfare',
        Priority: 'High',
        Status: 'Queue',
        CreatedBy: 'Chaz Leong',
        AssignedTo: 'Chaz Leong',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        CardNumber: ++cardCount,
        Title: 'Buy Clothes',
        Priority: 'Medium',
        Status: 'Queue',
        CreatedBy: 'Chaz Leong',
        AssignedTo: 'Chaz Leong',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cards', null, {});
  }
};
