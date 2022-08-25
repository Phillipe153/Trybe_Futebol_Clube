import { Model, INTEGER, BOOLEAN } from 'sequelize';
import 'dotenv/config';
import db from '.';
import Team from './teams';

class Matches extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: boolean | number;
}

Matches.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeam: {
      type: INTEGER,
      field: 'home_team',

    },
    homeTeamGoals: {
      type: INTEGER,
      field: 'home_team_goals',
    },
    awayTeam: {
      type: INTEGER,
      field: 'away_team',
    },
    awayTeamGoals: {
      type: INTEGER,
      field: 'away_team_goals',
    },
    inProgress: {
      type: BOOLEAN,
      field: 'in_progress',
    },
  },
  {
    timestamps: false,
    modelName: 'matches',
    sequelize: db,
  },
);

Matches.belongsTo(Team, {
  as: 'teamHome',
  foreignKey: 'homeTeam',
});
Matches.belongsTo(Team, {
  as: 'teamAway',
  foreignKey: 'awayTeam',
});

export default Matches;
