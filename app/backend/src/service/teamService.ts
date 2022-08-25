import { ITeam } from '../interfaces';
import Team from '../database/models/teams';

export default async function teamService(id: number):Promise<any> {
  const teamSearched: ITeam = await Team.findOne({ where: { id } }) as ITeam;
  // console.log(teamSearched);

  // const team = {
  //   id: teamSearched.id,
  //   teamName: teamSearched.teaName,
  // };

  return { status: 200, teamSearched };
}
