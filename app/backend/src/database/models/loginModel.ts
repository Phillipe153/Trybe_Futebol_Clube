import * as sequelize from 'sequelize';
import { Attributes } from '../../interfaces/index';
import 'dotenv/config';
import db from '.';

class User extends sequelize.Model<Attributes> {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string | undefined;
}

User.init({
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: sequelize.DataTypes.STRING,
  email: sequelize.DataTypes.STRING,
  password: sequelize.DataTypes.STRING,
  role: sequelize.DataTypes.STRING,
}, {
  timestamps: false,
  modelName: 'users',
  sequelize: db,
});

export default User;
