import { Request, Response, NextFunction } from 'express';
import getLeaderboardService from '../service/getLeaderboardService';
// import ErroHandler from '../utils/error';
// import authToken from '../utils/authToken';

async function getLeaderboardController(req: Request, res: Response, next: NextFunction) {
  try {
    // const token = req.headers.authorization;

    // if (!token) {
    //   throw new ErroHandler(401, 'Token not found');
    // }

    // const auth = authToken(token);

    const leaderboard = await getLeaderboardService();
    return res.status(200).json(leaderboard);
  } catch (err) {
    next(err);
  }
}
export default getLeaderboardController;
