import { IMatches } from '../interfaces';
import Matches from '../database/models/matches';

async function
updateMatchInProgressService(id: number, homeTeamGoals: number, awayTeamGoals: number)
  :Promise<void> {
  await Matches.update(
    { homeTeamGoals, awayTeamGoals },
    { where: { id } },
  ) as unknown as IMatches;
}
export default updateMatchInProgressService;
