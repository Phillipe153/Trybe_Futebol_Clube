import { Request, Response, NextFunction } from 'express';
import matchesServiceSearched from '../service/matchesServiceSearched';

async function matchesControllerSearch(req: Request, res: Response, next: NextFunction) {
  try {
    const { query } = req;
    const q = query.inProgress === 'true';
    console.log('query: ', q);

    const { status, allMatches } = await matchesServiceSearched(q);
    return res.status(status).json(allMatches);
  } catch (err) {
    next(err);
  }
}

export default matchesControllerSearch;
