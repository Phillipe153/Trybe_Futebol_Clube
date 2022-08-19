'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: { type: Sequelize.STRING },
      email: { allowNull: false, type: Sequelize.STRING },
      password: { allowNull: true, type: Sequelize.STRING },
      role: { allowNull: true, type: Sequelize.STRING },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};