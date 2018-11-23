'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rateclient', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        default: 0,
        type: Sequelize.STRING
      },
      discount: {
        allowNull: false,
        type: Sequelize.NUMERIC
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rateclient');
  }
};