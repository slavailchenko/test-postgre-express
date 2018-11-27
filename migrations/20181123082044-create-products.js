'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subcategory_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      brand_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      article: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      availability_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      warranty_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      condition_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      supplier_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};