'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classificationsHomes', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      totalPoints: Sequelize.INTEGER,
      totalGames: Sequelize.INTEGER,
      totalVictories: Sequelize.INTEGER,
      totalDraws: Sequelize.INTEGER,
      totalLosses: Sequelize.INTEGER,
      goalsFavor: Sequelize.INTEGER,
      goalsOwn: Sequelize.INTEGER,
      goalsBalance: Sequelize.INTEGER,
      efficiency: Sequelize.FLOAT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('classificationsHomes');
  }
};
