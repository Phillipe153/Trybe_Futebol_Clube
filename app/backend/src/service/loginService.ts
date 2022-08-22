import bcrypt from 'bcryptjs';
import erroHandler from '../utils/error';
import generateJWT from '../utils/generateJWT';
import User from '../database/models/loginModel';
import { Attributes } from '../interfaces';

export default async function loginService(email: string, pass: string):
Promise<{ status: number, token?: string, message?: string }> {
  const user: User | null = await User.findOne({ where: { email } });
  // console.log(user?.password);

  const password = user?.password || '';
  console.log('user: ', user);

  console.log('pass: ', pass);
  console.log('password: ', password);
  // console.log("email: ", email);

  const compare = await bcrypt.compare(pass, password);
  console.log('compare', compare);

  if (!user) {
    throw new erroHandler(401, 'Incorrect email or password');
  }
  if (compare === false) {
    throw new erroHandler(401, 'Incorrect email or password');
  }
  const token = generateJWT(user as unknown as Attributes);
  return { status: 200, token };
}
