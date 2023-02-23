import express, { Router } from 'express';
import { WeightHandler } from '../handlers/weight-handler';
import { authMiddleware } from '../middleware/auth-middleware';

const path = '/weight';
const WeightRouter: Router = express.Router();

WeightRouter.get(`${path}/get_weight_history`, authMiddleware, WeightHandler.getWeightHistory);
WeightRouter.post(`${path}/save_weight`, authMiddleware, WeightHandler.saveWeightEntry);
WeightRouter.delete(`${path}/delete_weight/:id`, authMiddleware, WeightHandler.deleteWeightEntry);
WeightRouter.patch(`${path}/update_weight/:id`, authMiddleware, WeightHandler.updateWeightEntry);

export default WeightRouter;
