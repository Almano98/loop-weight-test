import express, { Express, Request, Response } from "express";
import cors from "cors";

import connect from "./clients/mongoose-client";
import WeightRouter from "./routes/weight-routes";

const startApp = async () => {
  await connect();
  const app: Express = express();
  const API_PORT = 8000;

  app.use(express.json());
  app.use(cors());
  app.use(WeightRouter);

  app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
};

startApp();
