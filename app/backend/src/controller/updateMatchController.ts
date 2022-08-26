import { Request, Response, NextFunction } from 'express';
import updateMatchService from '../service/updateMatchService';
import ErroHandler from '../utils/error';
import authToken from '../utils/authToken';

async function updatedMatchController(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new ErroHandler(401, 'Token not found');
    }
    authToken(token as string);

    const { id } = req.params;
    await updateMatchService(+id);
    return res.status(200).json({ message: 'Finished' });
  } catch (err) {
    next(err);
  }
}
export default updatedMatchController;
