import mongoose from 'mongoose';

let conn;

/**
 * Helper function to check if a connection to a mongo server is already present if so return it
 * else create a connection and return the newly form connection
 * @returns mongodb connection
 */
const connect = async () => {
  if (!conn) {
    const uri = 'mongodb://mongo:27017/loop';
    if (!uri) {
      throw new Error('Did not load URI');
    }

    conn = await mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => mongoose);
  }
  return conn;
};

export default connect;
