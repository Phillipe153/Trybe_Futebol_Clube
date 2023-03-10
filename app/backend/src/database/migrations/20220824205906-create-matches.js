'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    homeTeam: {
      type: Sequelize.INTEGER,
      field: "home_team"
    },
    homeTeamGoals: {
      type: Sequelize.INTEGER,
      field: "home_team_goals",
      refernces: {
        model: 'teams',
        key: 'id'
      }
    },
    awayTeam: {
      type: Sequelize.INTEGER,
      field: "away_team",
      refernces: {
        model: 'teams',
        key: 'id'
      }
    },
    awayTeamGoals: {
      type: Sequelize.INTEGER,
      field: "away_team_goals",
    },
    inProgress: {
      type: Sequelize.BOOLEAN,
      field: "in_progress",
    },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};