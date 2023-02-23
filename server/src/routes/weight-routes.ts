import express, { Router } from "express";
import { WeightHandler } from "../handlers/weight-handler";

const path = "/weight";
const WeightRouter: Router = express.Router();

WeightRouter.get(`${path}/get_weight_history`, WeightHandler.getWeightHistory);
WeightRouter.post(`${path}/save_weight`, WeightHandler.saveWeightEntry);
WeightRouter.delete(`${path}/delete_weight`, WeightHandler.deleteWeightEntry);

export default WeightRouter;
