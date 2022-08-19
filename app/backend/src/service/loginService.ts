
import erroHandler from '../utils/error';
import generateJWT from '../utils/generateJWT'
import  User  from '../database/models/loginModel'
import { Attributes } from '../interfaces';
import bcrypt from 'bcryptjs';

export default async function loginService(email: string, password: string):
Promise<{status: number, token?: string, message?: string}> {  
    
    const user = await User.findOne({where: {email}})
    
    const pass = user?.getDataValue("password");    
    
    const compare = await bcrypt.compare(password, JSON.stringify(pass) );
    console.log("compare: ", compare);

    if(!user) {
        throw new erroHandler(401, 'Incorrect email or password')
    }
    if(compare === false) {
        throw new erroHandler(401, 'Incorrect password')
    }
    const token = generateJWT(user as unknown as Attributes);
    return{status:200, token}

}