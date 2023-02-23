import { IWeight, WeightModel } from '../models/weight-model';

export class WeightController {
  static async createWeightEntry(weight: IWeight): Promise<IWeight> {
    console.log('WeightHandler... Save Weight Event');
    const weightEntry: IWeight = await WeightModel.create(weight);
    console.log(weightEntry);
    return weightEntry;
  }

  static async getAllWeightEntries(userId: string): Promise<IWeight[]> {
    console.log('WeightHandler... Get Weight History');
    return await WeightModel.find({ user: userId }).sort({ createdAt: 'desc' });
  }

  static async deleteWeightEntry(_id: string, userId: string): Promise<Boolean> {
    try {
      const response = await WeightModel.findOneAndDelete({ _id, user: userId });
      return true;
    } catch (e) {
      // console.log(e);
    }
    return false;
  }

  static async updateWeightEntry(_id: string, userId: string, weight: IWeight): Promise<IWeight> {
    return await WeightModel.findOneAndUpdate({ _id, user: userId }, weight, { new: true });
  }
}
