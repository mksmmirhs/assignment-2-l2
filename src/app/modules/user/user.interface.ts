import { Model } from 'mongoose';

export type TFullName = {
  firstName: string;
  lastName: string;
};

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TOrders = {
  productName: string;
  price: number;
  quantity: number;
};

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrders[];
};

export type TUserInfo = TUser & {
  user_info: Partial<TUser>;
};

export interface UserModel extends Model<TUser> {
  isUserExist(userId: number): boolean;
  isUserNameExist(username: string): boolean;
}
