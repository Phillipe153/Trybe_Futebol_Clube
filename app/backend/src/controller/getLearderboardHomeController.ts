import { Request, Response, NextFunction } from 'express';
import getLeaderboardHomeService from '../service/getLeaderboardHomeService';

async function getLeaderboardHomeController(req: Request, res: Response, next: NextFunction) {
  try {
    const leaderboard = await getLeaderboardHomeService();
    return res.status(200).json(leaderboard);
  } catch (err) {
    next(err);
  }
}
export default getLeaderboardHomeController;
