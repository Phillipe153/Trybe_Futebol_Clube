import { Request, Response, NextFunction } from 'express';
import newMatchService from '../service/newMatchSerrvice';
// import ErroHandler from '../utils/error';
import authToken from '../utils/authToken';

async function newMatchController(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;
    authToken(token as string);

    // if (!auth) {
    //   throw new ErroHandler(401, 'Token not found');
    // }

    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const newMatch = await newMatchService(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);
    return res.status(201).json(newMatch);
  } catch (err) {
    next(err);
  }
}
export default newMatchController;
