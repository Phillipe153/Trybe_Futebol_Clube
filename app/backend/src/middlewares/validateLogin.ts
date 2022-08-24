import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import ErroHandler from '../utils/error';

const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userData = Joi.object({
  email: Joi.string().regex(regexEmail).required(),
  password: Joi.string().min(6).required(),
});

const loginValidateMidlleware = (req: Request, _res: Response, next: NextFunction) => {
  
  const { email, password } = req.body;
  const { error } = userData.validate({ email, password });

  if (error) {
    throw new ErroHandler(400, 'All fields must be filled');
  } next();
};

export default loginValidateMidlleware;
