import { Request, Response, NextFunction } from 'express';
import ErroHandler from '../utils/error';
import loginValidateService from '../service/loginValidateService';
import authToken from '../utils/authToken';


export default async function loginValidateController(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers['authorization'];
        
            if (!token) {
              throw new ErroHandler(401, 'Token not found');
            }
            
            const auth = authToken(token);
            
            
        const testes = await loginValidateService(auth.payload.email)
        return res.status(200).json({ role: testes });
      } catch (err) {
        next(err);
      }
}
