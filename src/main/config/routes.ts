import { Express, Router } from "express";
import { transactionRoutes } from "../routes";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", transactionRoutes(router));
};
