import bcrypt from 'bcryptjs';
import ErroHandler from '../utils/error';
import generateJWT from '../utils/generateJWT';
import User from '../database/models/loginModel';
import { Attributes } from '../interfaces';
import authToken from '../utils/authToken';

export default async function loginValidateService(email: string):Promise<any> {

    console.log(email);
    

  const user: User | null = await User.findOne({ where:  {email} ,
    attributes: {
        exclude: ['username', 'id', 'password', 'email' ]
    }
});
  console.log(user);
  return user?.role;
}
