import { IWeight, WeightModel } from '../models/weight-model';

export class WeightController {
  static async createWeightEntry(weight: IWeight): Promise<IWeight> {
    const weightEntry: IWeight = await WeightModel.create(weight);
    return weightEntry;
  }

  static async getAllWeightEntries(userId: string): Promise<IWeight[]> {
    return await WeightModel.find({ user: userId }).sort({ createdAt: 'desc' });
  }

  static async deleteWeightEntry(_id: string, userId: string): Promise<Boolean> {
    try {
      const response = await WeightModel.findOneAndDelete({ _id, user: userId });
      return true;
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  static async updateWeightEntry(_id: string, userId: string, weight: IWeight): Promise<IWeight> {
    return await WeightModel.findOneAndUpdate({ _id, user: userId }, weight, { new: true });
  }
}
