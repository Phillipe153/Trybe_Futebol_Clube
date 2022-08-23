'use strict';
import {Model, INTEGER, STRING } from 'sequelize';
import 'dotenv/config';
import db from '.';

class Team extends Model {
  id!: number;
  team_name!: string
}

Team.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  team_name: STRING
  },
  {
  timestamps: false,
  modelName: 'teams',
  sequelize: db,
});

export default Team;
