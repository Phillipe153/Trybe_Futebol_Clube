import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';
import ErroHandler from './error';
import { Attributes, IData } from '../interfaces';

dotenv.config();

const authToken = (token: string) => {
  

    // const dec = jwt.verify(token, process.env.JWT_SECRET as string) as IData;
    // if (!dec) {
    //     throw new ErroHandler(400, 'deu ruim aqui')
    // }
    let dec: IData = {} as IData;
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded)=> {
              if (err) {
                throw new ErroHandler(401, 'Expired or invalid token');
              }            
              dec = decoded as IData;
            });
            console.log('dec: ',dec);
            
    return dec;
        
    
}

export default authToken;