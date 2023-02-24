import mongoose from 'mongoose';

let conn;

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
