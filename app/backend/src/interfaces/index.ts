
export interface IUser {
  email: string,
  password?: string,
}
export interface Attributes extends IUser {
  id: number,
  username: string,
  role: string
}

