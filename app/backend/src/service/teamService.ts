import { ITeam } from '../interfaces';
import Team from '../database/models/teams';

export default async function teamService(id: number):Promise<any> {
    console.log('entrou em service');
    
  const team: ITeam | null = await Team.findOne({ where:  {id}}) as unknown as ITeam;
//   console.log('team: ', team.team.dataValues);
  return {status: 200, team};
}
