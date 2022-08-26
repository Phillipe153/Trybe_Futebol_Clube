import { Request, Response, NextFunction } from 'express';
import ErroHandler from '../utils/error';
import authToken from '../utils/authToken';
import updateMatchInProgressService from '../service/updateMatchInProgressService';

async function updatedMatchInProgressController(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new ErroHandler(401, 'Token not found');
    }
    authToken(token as string);

    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await updateMatchInProgressService(+id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated goals' });
  } catch (err) {
    next(err);
  }
}
export default updatedMatchInProgressController;
