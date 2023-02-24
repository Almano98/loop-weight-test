import { Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';
import { IUser } from '../models/user-model';
import { UserResponse } from '../types/user-types';
import { encodeJWT } from '../utils/jwt-utils';

export class UserHandler {
  static async login(req: Request, res: Response) {
    try {
      const response: UserResponse = await UserController.login(req.body);
      if (response.error) {
        return res.status(400).json(response.error);
      }
      const userId = response.user._id.toString();
      const jwtToken = await encodeJWT(userId);

      return res.status(200).json(jwtToken);
    } catch (e) {
      console.error(e);
      return res.status(500);
    }
  }

  static async signUp(req: Request, res: Response) {
    try {
      const response: UserResponse = await UserController.signUp(req.body);
      if (response.error) {
        return res.status(400).json(response.error);
      }
      const userId = response.user._id.toString();
      const jwtToken = await encodeJWT(userId);

      return res.status(200).json(jwtToken);
    } catch (e) {
      console.error(e);
      return res.status(500);
    }
  }
}
