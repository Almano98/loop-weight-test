import { UserController } from '../controllers/user-controller';
import { IUser } from '../models/user-model';
import { decodeJWT } from '../utils/jwt-utils';

/**
 * Authentication middleware, retrieves the jwtToken from the authorization header and decodes it.
 * Attempts to find the user within the database. If found append the user document to the request
 * If not found return an authentication error to the user
 * @param req Request Object
 * @param res Response Object
 * @param next Function to run
 */
export const authMiddleware = async (req, res, next) => {
  try {
    const jwtString = req.headers['authorization'] || null;
    if (!jwtString) {
      throw new Error();
    }
    const { id } = await decodeJWT(jwtString);
    const user: IUser = await UserController.findUserByID(id);

    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};
