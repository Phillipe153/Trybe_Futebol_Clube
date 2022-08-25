import { Request, Response, NextFunction } from 'express';
import loginService from '../service/loginService';

export default async function loginController(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    const { status, token } = await loginService(email, password);
    return res.status(status).json({ token });
  } catch (err) {
    next(err);
  }
}
