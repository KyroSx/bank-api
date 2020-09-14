import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import {
  makeAddTransactionController,
  makeFetchTransactionsWithBalanceController,
} from "../factories/controllers/transactions";

export const transactionRoutes = (router: Router): Router => {
  router.post("/transactions", adaptRoute(makeAddTransactionController()));

  router.get(
    "/transactions",
    adaptRoute(makeFetchTransactionsWithBalanceController()),
  );

  return router;
};
