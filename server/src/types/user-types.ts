import { IUser } from '../models/user-model';

export type UserResponse = {
  error?: string;
  user?: IUser;
};
