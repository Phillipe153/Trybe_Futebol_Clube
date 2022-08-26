import { IMatches } from '../interfaces';
import Matches from '../database/models/matches';

async function
updateMatchService(id: number)
  :Promise<void> {
  const match = await Matches.findOne({ where: { id } }) as unknown as IMatches;
  console.log('previousProgress: ', match);

  match.inProgress = false;

  console.log('newrogress: ', match);
}
export default updateMatchService;
