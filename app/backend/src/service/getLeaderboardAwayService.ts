import { IClassification } from '../interfaces';
import classificationAway from '../classification/classificationAway';

export default async function getLeaderboardAwayService():Promise<IClassification[]> {
  // classificationAway();
  const leaderboard: any = classificationAway();
  return leaderboard;
}
