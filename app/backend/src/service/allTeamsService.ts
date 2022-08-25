import { ITeams } from '../interfaces';
import Team from '../database/models/teams';

export default async function allTeamsService():Promise<any> {
  const allTeams: ITeams | null = (await Team.findAll()) as unknown as ITeams;
  // .map((e) => ({
  //   id: e.id,
  //   teamName: e.team_name,
  // })) as unknown as ITeams;

  return { status: 200, allTeams };
}
