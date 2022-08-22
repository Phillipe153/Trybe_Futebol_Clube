
import User from '../../database/models/loginModel';
import { Attributes } from '../../interfaces';
import Users from './mock.json';

const mockCreate = (Instance: any, data: any) => {
  console.log(4);
  

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

// const mockFindOne = async (Users:
//    { id: number; username: string; email: string; password: string; role: string; }[], where: any):
//     Promise<User | null> => {

//     console.log('entrou aqui');
    
//   if(!where){
//     return Users[0] as User;
//   }
//   console.log(2);

//   const entries = Object.entries(where);
//   let result: Attributes | null = null;

//   entries.forEach(entry => {
//     const [key, value] = [entry[0], entry[1]];

//     const index = Users
//       .findIndex(item => !!item[key] && item[key] === value);
//     if(index !== -1){
//       result = Users[index];
//     }
//   });

//   return result;
// };

export const mockFindOne: unknown = {
  id: 1,
  username: "Admin",
  email: "admin@admin.com",
  password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
  role: "admin"
};


const Mock = {   
  create: async (data: any) => mockCreate(Users, data),
  findAll:  async (): Promise<User | object > => Users,
  // findOne: async (data: any): Promise<User | null> => await mockFindOne(Users, data),
};


export default Mock;

