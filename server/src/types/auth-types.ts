import { Request, Response } from 'express';
import { Interface } from 'readline';
import { IUser } from '../models/user-model';

export interface AuthRequest extends Request {
  user: IUser;
}
