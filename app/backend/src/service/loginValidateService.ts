import User from '../database/models/loginModel';

export default async function loginValidateService(email: string):Promise<any> {
  console.log(email);

  const user: User | null = await User.findOne({ where: { email },
    attributes: {
      exclude: ['username', 'id', 'password', 'email'],
    },
  });
  console.log(user);
  return user?.role;
}
