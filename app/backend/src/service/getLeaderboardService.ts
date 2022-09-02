// import { ITeam } from '../interfaces';
// import Team from '../database/models/teams';
import { IClassification } from '../interfaces';
import Classification from '../database/models/classification';
// import classification from '../utils/classification';

export default async function getLeaderboardService():Promise<IClassification[]> {
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
