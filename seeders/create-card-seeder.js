'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', [
      {
        Title: 'Workout',
        Priority: 'High',
        Status: 'Queue',
        CreatedBy: 'Chaz Leong',
        AssignedTo: 'Chaz Leong',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        Title: 'Wax Car',
        Priority: 'High',
        Status: 'Queue',
        CreatedBy: 'Chaz Leong',
        AssignedTo: 'Chaz Leong',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        Title: 'Grocery Shop',
        Priority: 'High',
        Status: 'Queue',
        CreatedBy: 'Chaz Leong',
        AssignedTo: 'Chaz Leong',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cards', null, {});
  }
};
