import { Request, Response } from "express";
import { WeightController } from "../controllers/weight-controller";
import { IWeight } from "../models/weight-model";

export class WeightHandler {
  static async getWeightHistory(req: Request, res: Response) {
    console.log("WeightHandler... Get Weight History");
    try {
      const weightEntries: IWeight[] =
        await WeightController.getAllWeightEntries();
      return res.status(200).json(weightEntries);
    } catch (e) {
      return res.status(500);
    }
  }

  static async saveWeightEntry(req: any, res: any) {
    console.log("WeightHandler... Save Weight Entry");
    try {
      const weightEntry: IWeight = await WeightController.createWeightEntry(
        req.body
      );
      return res.status(200).json(weightEntry);
    } catch (e) {
      return res.status(500);
    }
  }

  //TODO BONUS METHODS
  static async UpdateWeightEntry(req: Request, res: Response) {}

  static async deleteWeightEntry(req: Request, res: Response) {
    console.log("WeightHandler... Save Weight Entry");

    try {
      const succesful: Boolean = await WeightController.deleteWeightEntry(
        req.body
      );

      return succesful
        ? res.status(200).json(req.body)
        : res.status(400).json(req.body);
    } catch (e) {
      return res.status(500);
    }
  }
}
