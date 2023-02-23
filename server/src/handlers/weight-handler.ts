import { Request, Response } from 'express';
import { WeightController } from '../controllers/weight-controller';
import { IWeight } from '../models/weight-model';
import { AuthRequest } from '../types/auth-types';
export class WeightHandler {
  static async getWeightHistory(req: AuthRequest, res: Response) {
    console.log('WeightHandler... Get Weight History');
    const user = req.user;
    try {
      const weightEntries: IWeight[] = await WeightController.getAllWeightEntries(user._id.toString());
      return res.status(200).json(weightEntries);
    } catch (e) {
      return res.status(500);
    }
  }

  static async saveWeightEntry(req: AuthRequest, res: Response) {
    console.log('WeightHandler... Save Weight Entry');
    const user = req.user;
    try {
      const weightEntry: IWeight = await WeightController.createWeightEntry({ ...req.body, user: user._id });
      return res.status(200).json(weightEntry);
    } catch (e) {
      return res.status(500);
    }
  }

  static async updateWeightEntry(req: AuthRequest, res: Response) {
    const _id = req.params.id;
    const user = req.user;

    try {
      const updatedDoc: IWeight = await WeightController.updateWeightEntry(_id, user._id.toString(), req.body);
      res.status(200).json(updatedDoc);
    } catch (e) {
      return res.status(500);
    }
  }

  static async deleteWeightEntry(req: AuthRequest, res: Response) {
    console.log('WeightHandler... Save Weight Entry');
    const _id = req.params.id;
    const user = req.user;
    try {
      const succesful: Boolean = await WeightController.deleteWeightEntry(_id, user._id.toString());

      return succesful ? res.status(200).json(req.body) : res.status(400).json(req.body);
    } catch (e) {
      return res.status(500);
    }
  }
}
