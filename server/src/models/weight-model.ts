import { Schema, model, Types } from 'mongoose';

export interface IWeight {
  value: number;
  user: Types.ObjectId;
}

const weightSchema: Schema = new Schema<IWeight>(
  {
    value: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

export const WeightModel = model<IWeight>('Weight', weightSchema);
