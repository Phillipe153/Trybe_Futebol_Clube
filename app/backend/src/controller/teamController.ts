import { Request, Response, NextFunction } from 'express';
import teamService from '../service/teamService';

export default async function teamController(req: Request, res: Response, next: NextFunction) {
    try {
    
        const {id} = req.params;
        
        const {status, team} = await teamService(+id)
        return res.status(status).json(team);
      } catch (err) {
        next(err);
      }
}