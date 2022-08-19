
import User from '../../database/models/loginModel';
import { Attributes } from '../../interfaces';
import Users from './mock.json';

const mockCreate = (Instance: any, data: any) => {

  if(!data){
    return;
  }
  
  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const mockFindOne = async (Users:
   { id: number; username: string; email: string; password: string; role: string; }[], where: any): Promise<User | null> => {
  if(!where){
    return Users[0] as User;
  }

  const entries = Object.entries(where);
  let result: Attributes | null = null;

  entries.forEach(entry => {
    const [key, value] = [entry[0], entry[1]];

    const index = Users
      .findIndex(item => !!item[key] && item[key] === value);
    if(index !== -1){
      result = Users[index];
    }
  });

  return result;
};


 const Mock = {
  
  create: async (data: any) => mockCreate(Users, data),
  findAll:  () => Users,
  findOne: async ({ where }: any): Promise<User | null> => mockFindOne(Users, where),
};

export default Mock


