import { ITeam } from '../interfaces';
import Team from '../database/models/teams';

export default async function teamService(id: number):Promise<any> {
    
  const teamSearched: ITeam= await Team.findOne({ where:  {id}}) as ITeam;
  const team = {
    id: teamSearched.id ,
    teamName: teamSearched.team_name
  }
  console.log('team: ', team);

  return {status: 200, team};
}
