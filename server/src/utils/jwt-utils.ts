import jwt from 'jsonwebtoken';
const stripAuthString = (authString: string) => {
  let token = authString.trim();
  if (authString.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = authString.slice(7, authString.length);
  }
  return token.trim();
};
export const decodeJWT = async (token: string): Promise<{ id: string; exp: number }> => {
  token = stripAuthString(token);
  const jwtSecret: string = process.env.JWT_SECRET;
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return reject();
      }
      return resolve(decoded);
    });
  });
};
export const encodeJWT = async (id: string): Promise<string> => {
  const jwtSecret: string = process.env.JWT_SECRET;
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, jwtSecret, (err, encoded) => {
      if (err) {
        return reject();
      }
      return resolve(encoded);
    });
  });
};
