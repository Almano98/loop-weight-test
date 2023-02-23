import { Schema, model, Types } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  surname: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

export const UserModel = model<IUser>('User', userSchema);
