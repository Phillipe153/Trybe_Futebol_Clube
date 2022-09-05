import { Model, INTEGER, STRING, FLOAT } from 'sequelize';
import 'dotenv/config';
import db from '.';

class ClassificationHome extends Model {
  name!: string;
  totalPoints!: number;
  totalGames!: number;
  totalVictories!: number;
  totalDraws!: number;
  totalLosses!: number;
  goalsFavor!: number;
  goalsOwn!: number;
  goalsBalance!: number;
  efficiency!: number;
}

ClassificationHome.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING,
    totalPoints: INTEGER,
    totalGames: INTEGER,
    totalVictories: INTEGER,
    totalDraws: INTEGER,
    totalLosses: INTEGER,
    goalsFavor: INTEGER,
    goalsOwn: INTEGER,
    goalsBalance: INTEGER,
    efficiency: FLOAT,

  },
  {
    timestamps: false,
    modelName: 'classificationsHomes',
    sequelize: db,
  },
);

export default ClassificationHome;
