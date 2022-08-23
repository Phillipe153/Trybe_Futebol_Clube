import * as jwt from 'jsonwebtoken';
import * as dontev from 'dotenv';
import { Attributes } from '../interfaces/index';

dontev.config
();
const jwtConfig: jwt.SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const secret = <string> (process.env.JWT_SECRET);

const generateJWT = (payload: Attributes) => {
    // console.log('payload', payload);
    
    const token = jwt.sign({payload}, secret, jwtConfig);
    return token;
}

export default generateJWT;
