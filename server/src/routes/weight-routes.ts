import express, { Router } from "express";
import { WeightHandler } from "../handlers/weight-handler";

const path = "/weight";
const WeightRouter: Router = express.Router();

WeightRouter.get(`${path}/get_weight_history`, WeightHandler.getWeightHistory);
WeightRouter.post(`${path}/save_weight`, WeightHandler.saveWeightEntry);

export default WeightRouter;
