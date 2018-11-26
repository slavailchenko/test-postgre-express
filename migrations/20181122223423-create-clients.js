'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          msg: 'E-mail must be correct'
        }
      },
      id_rate: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
      },
      id_registration: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
      },
      date_regastration: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
      },
      exp_date_regastration: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW
      }
    }).then (() => 
    queryInterface.addIndex('clients', {fields: ['email'], using:'gin', operator:'text_ops'}));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients').then(() => 
      queryInterface.removeIndex('clients', 'email'));
  }
};