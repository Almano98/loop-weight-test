import { IWeight, WeightModel } from '../models/weight-model';

export class WeightController {
  /**
   * Creates a new weight entry into the database
   * @param weight weight object to be added to database
   * @returns created weight document
   */
  static async createWeightEntry(weight: IWeight): Promise<IWeight> {
    const weightEntry: IWeight = await WeightModel.create(weight);
    return weightEntry;
  }

  /**
   * Returns all weight entries for a specified user
   * @param userId id of the requested user
   * @returns array of weight documents
   */
  static async getAllWeightEntries(userId: string): Promise<IWeight[]> {
    return await WeightModel.find({ user: userId }).sort({ createdAt: 'desc' });
  }

  /**
   * Removes a weight entry by id checked against the correct userId to ensure a user can only
   * remove their weight entries and not another users.
   * @param _id of the weight entry
   * @param userId of the user
   * @returns boolean if the operation was a success
   */
  static async deleteWeightEntry(_id: string, userId: string): Promise<Boolean> {
    try {
      const response = await WeightModel.findOneAndDelete({ _id, user: userId });
      return true;
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  /**
   * Updates a given weight entry by id
   * @param _id of the weight entry to update
   * @param userId user id of the weight entry owner
   * @param weight new weight to update
   * @returns updated weight entry doc
   */
  static async updateWeightEntry(_id: string, userId: string, weight: IWeight): Promise<IWeight> {
    return await WeightModel.findOneAndUpdate({ _id, user: userId }, weight, { new: true });
  }
}
