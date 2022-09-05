import { IClassification } from '../interfaces';
import Classification from '../database/models/classification';
import generalClassification from '../classification/generalClassification';

export default async function getLeaderboardService():Promise<IClassification[]> {
  generalClassification();
  // await classification();
  const leaderboard = await Classification.findAll({ order: [
    ['totalPoints', 'DESC'],
    ['totalVictories', 'DESC'],
    ['goalsBalance', 'DESC'],
    ['goalsFavor', 'DESC'],
    ['goalsOwn', 'DESC'],
  ] });
  return leaderboard;
}
