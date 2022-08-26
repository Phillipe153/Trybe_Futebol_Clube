import { Request, Response, NextFunction } from 'express';
import ErroHandler from '../utils/error';
// });

const ValidateTeamsMidlleware = (req: Request, _res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    throw new ErroHandler(401, 'It is not possible to create a match with two equal teams');
  } next();
};

export default ValidateTeamsMidlleware;
