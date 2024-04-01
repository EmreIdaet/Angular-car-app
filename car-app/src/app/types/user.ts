export interface User {
  cars: string[];
  posts: string[];
  _id: string;
  email: string;
  username: string;
  password: string;
  created_ad: string;
  updatedAt: string;
  __v: number;
}

export interface UserForAuth {
  username: string;
  email: string;
  password: string;
  _id: string;
}