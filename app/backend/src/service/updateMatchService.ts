import { IMatches } from '../interfaces';
import Matches from '../database/models/matches';

async function
updateMatchService(id: number)
  :Promise<void> {
  await Matches.update(
    { inProgress: 'false' },
    { where: { id } },
  ) as unknown as IMatches;
}
export default updateMatchService;
