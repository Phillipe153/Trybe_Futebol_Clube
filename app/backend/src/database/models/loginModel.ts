import {Model, INTEGER, STRING } from 'sequelize';
import 'dotenv/config';
import db from '.';

class User extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string | undefined;
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: STRING,
  email: STRING,
  password: STRING,
  role: STRING,
}, {
  timestamps: false,
  modelName: 'users',
  sequelize: db,
});


export default User;
