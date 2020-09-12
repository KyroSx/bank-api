import { AddTransactionController } from "@/presentation/controllers/transactions/add-transaction-controller";
import { makeDbAddTransaction } from "../../usecases/transactions/make-db-add-transaction";
import { makeAddTransactionValidation } from "./make-add-transactions-validation";

export const makeAddTransactionController = (): AddTransactionController => {
  const addTransaction = makeDbAddTransaction();
  const validation = makeAddTransactionValidation();

  const addTransactionController = new AddTransactionController(
    addTransaction,
    validation,
  );

  return addTransactionController;
};
