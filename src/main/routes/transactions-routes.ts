import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddTransactionController } from "../factories/controllers/transactions";
import { makeFetchTransactionsController } from "../factories/controllers/transactions/fetch-transactions/make-fetch-transactions-controller";

export const transactionRoutes = (router: Router): Router => {
  router.post("/transactions", adaptRoute(makeAddTransactionController()));

  router.get("/transactions", adaptRoute(makeFetchTransactionsController()));

  return router;
};
