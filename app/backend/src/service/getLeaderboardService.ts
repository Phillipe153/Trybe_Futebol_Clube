import { IClassification } from '../interfaces';
import generalClassification from '../classification/generalClassification';

export default async function getLeaderboardService():Promise<IClassification[]> {
  const leaderboard: any = generalClassification();
  return leaderboard;
}
