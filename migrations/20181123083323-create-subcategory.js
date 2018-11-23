'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subcategory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idcategory: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      namesubcategory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descriptionsubcategory: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('subcategory');
  }
};