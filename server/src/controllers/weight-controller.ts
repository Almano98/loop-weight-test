import { Request, Response } from "express";
import { IWeight, WeightModel } from "../models/weight-model";

export class WeightController {
  static async createWeightEntry(weight: IWeight): Promise<IWeight> {
    console.log("WeightHandler... Save Weight Event");
    const weightEntry: IWeight = await WeightModel.create(weight);
    console.log(weightEntry);
    return weightEntry;
  }

  static async getAllWeightEntries(): Promise<IWeight[]> {
    console.log("WeightHandler... Get Weight History");
    return WeightModel.find().sort({ createdAt: "desc" });
  }
}
