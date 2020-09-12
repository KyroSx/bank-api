import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddTransactionController } from "../factories/controllers/transactions/make-add-transaction-controller";

export const transactionRoutes = (router: Router) => {
  return router.post(
    "/transactions",
    adaptRoute(makeAddTransactionController()),
  );
};
