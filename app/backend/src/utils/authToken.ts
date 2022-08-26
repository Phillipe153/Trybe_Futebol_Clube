import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import ErroHandler from './error';
import { IData } from '../interfaces';

dotenv.config();

const authToken = (token: string) => {
  let dec: IData = {} as IData;
  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      throw new ErroHandler(401, 'Token must be a valid token');
    }
    dec = decoded as IData;
  });

  return dec;
};

export default authToken;
