import { IMatches } from '../interfaces';
import Matches from '../database/models/matches';

async function
newMatchService(homeTeam: number, awayTeam: number, homeTeamGoals: number, awayTeamGoals: number)
  :Promise< IMatches > {
  const newMatch: IMatches = await Matches.create({
    homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
  }) as unknown as IMatches;
  return newMatch;
}
export default newMatchService;
