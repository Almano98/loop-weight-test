import express, { Router } from 'express';
import { UserHandler } from '../handlers/user-handler';

const path = '/user';
const UserRouter: Router = express.Router();

UserRouter.post(`${path}/login`, UserHandler.login);
UserRouter.post(`${path}/sign_up`, UserHandler.signUp);

export default UserRouter;
