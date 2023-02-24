import { IWeight, WeightModel } from '../models/weight-model';
import { IUser, UserModel } from '../models/user-model';
import bcyrpt from 'bcrypt';
import { UserResponse } from '../types/user-types';

export class UserController {
  static async signUp(user: IUser): Promise<UserResponse> {
    const response: UserResponse = {};
    try {
      const newUser: IUser = await UserModel.create(user);
      response.user = newUser;
    } catch (e) {
      console.log(e);
      response.error = 'User already exists';
    }
    return response;
  }

  static async login(user: IUser): Promise<UserResponse> {
    const response: UserResponse = {};
    try {
      const userDoc: IUser = await UserModel.findOne({ email: user.email });
      if (!userDoc) {
        response.error = 'User does not exist';
        return response;
      }
      const match = await bcyrpt.compare(user.password, userDoc.password);
      if (match) {
        response.user = userDoc;
      } else {
        response.error = 'Passwords do not match.';
      }
    } catch (e) {
      console.log(e);
      response.error = 'User does not exist or password incorrect.';
    }
    return response;
  }

  static async findUserByID(id: string): Promise<IUser> {
    return await UserModel.findById(id);
  }
}
