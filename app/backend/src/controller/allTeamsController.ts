import { Request, Response, NextFunction } from 'express';
import allTeamsService from '../service/allTeamsService';

export default async function allTeamsController(req: Request, res: Response, next: NextFunction) {
  try {
    const { status, allTeams } = await allTeamsService();
    return res.status(status).json(allTeams);
  } catch (err) {
    next(err);
  }
}
