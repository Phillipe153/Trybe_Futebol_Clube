import ErroHandler from '../utils/error';
import { IMatches, ITeam } from '../interfaces';
import Matches from '../database/models/matches';
import allTeamsService from './allTeamsService';

async function
newMatchService(homeTeam: number, awayTeam: number, homeTeamGoals: number, awayTeamGoals: number)
  :Promise< IMatches > {
  const teams = await allTeamsService();

  let homeTeamVerify = false;
  let awayTeamVerify = false;

  teams.allTeams.forEach((team: ITeam) => {
    if (team.id === homeTeam) homeTeamVerify = true;
    if (team.id === awayTeam) awayTeamVerify = true;
  });

  if (homeTeamVerify === false || awayTeamVerify === false) {
    throw new ErroHandler(404, 'There is no team with such id!');
  }
  const newMatch: IMatches = await Matches.create({
    homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
  }) as unknown as IMatches;
  return newMatch;
}
export default newMatchService;
