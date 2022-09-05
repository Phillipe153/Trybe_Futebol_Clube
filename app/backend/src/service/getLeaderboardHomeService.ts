import { IClassification } from '../interfaces';
import classificationHome from '../classification/classificationHome';

export default async function getLeaderboardHomeService():Promise<IClassification[]> {
  const leaderboard: any = classificationHome();
  return leaderboard;
}
