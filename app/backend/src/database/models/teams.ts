import { Model, INTEGER, STRING } from 'sequelize';
import 'dotenv/config';
import db from '.';

class Team extends Model {
  id!: number;
  teamName!: string;
}

Team.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: STRING,
      field: 'team_name',
    },
  },
  {
    timestamps: false,
    modelName: 'teams',
    sequelize: db,
  },
);

export default Team;
