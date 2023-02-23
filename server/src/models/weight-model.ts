import { Schema, model } from "mongoose";

export interface IWeight {
  value: number;
}

const weightSchema: Schema = new Schema<IWeight>(
  {
    value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const WeightModel = model<IWeight>("Weight", weightSchema);
