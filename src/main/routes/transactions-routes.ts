import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import {
  makeAddTransactionController,
  makeFetchTransactionsController,
} from "../factories/controllers/transactions";

export const transactionRoutes = (router: Router): Router => {
  router.post("/transactions", adaptRoute(makeAddTransactionController()));

  router.get("/transactions", adaptRoute(makeFetchTransactionsController()));

  return router;
};
