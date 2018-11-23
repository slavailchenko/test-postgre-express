'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idstatus: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idpayment: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      iddelivery: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};