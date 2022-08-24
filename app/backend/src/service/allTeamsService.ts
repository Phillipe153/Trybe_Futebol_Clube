import bcrypt from 'bcryptjs';
import ErroHandler from '../utils/error';
import generateJWT from '../utils/generateJWT';
import teams from '../database/models/teams';
import { Attributes, ITeams } from '../interfaces';
import authToken from '../utils/authToken';
import { FindAttributeOptions } from 'sequelize/types';
import Team from '../database/models/teams';
import User from '../database/models/loginModel';
   
export default async function allTeamsService():Promise<any> {

    const allTeams: ITeams  | null = await Team.findAll() as unknown as ITeams;
    
  return {status: 200, allTeams};
}
