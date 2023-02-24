import { IWeight, WeightModel } from '../models/weight-model';
import { IUser, UserModel } from '../models/user-model';
import bcyrpt from 'bcrypt';
import { UserResponse } from '../types/user-types';

export class UserController {
  /**
   * Creates a new user document
   * @param user user object for the new user
   * @returns UserResponse object which includes the user doc or an error message
   */
  static async signUp(user: IUser): Promise<UserResponse> {
    const response: UserResponse = {};
    try {
      const newUser: IUser = await UserModel.create(user);
      response.user = newUser;
    } catch (e) {
      console.error(e);
      response.error = 'User already exists';
    }
    return response;
  }

  /**
   * Checks to see if the user exists and if it does, the password provided is correct
   * @param user user object for the new user
   * @returns UserResponse object which includes the user doc or an error message
   */
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
      console.error(e);
      response.error = 'User does not exist or password incorrect.';
    }
    return response;
  }

  /**
   * Retrieves user doc for the given user id
   * @param id of the user doc
   * @returns user object
   */
  static async findUserByID(id: string): Promise<IUser> {
    return await UserModel.findById(id);
  }
}
