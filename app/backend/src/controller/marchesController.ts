import { Request, Response, NextFunction } from 'express';
import matchesService from '../service/matchesService';

export default async function matchesController(req: Request, res: Response, next: NextFunction) {
  try {
    const { status, allMatches } = await matchesService();
    return res.status(status).json(allMatches);
  } catch (err) {
    next(err);
  }
}
