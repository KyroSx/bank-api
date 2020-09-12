import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddTransactionController } from "../factories/controllers/transactions/make-add-transaction-controller";

export default (router: Router): void => {
  router.post("/transactions", adaptRoute(makeAddTransactionController()));
};
