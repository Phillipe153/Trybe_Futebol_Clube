import { ITeam } from '../interfaces';
import Team from '../database/models/teams';

export default async function teamService(id: number):Promise<any> {
  const teamSearched: ITeam = await Team.findOne({ where: { id } }) as ITeam;
  return { status: 200, teamSearched };
}
