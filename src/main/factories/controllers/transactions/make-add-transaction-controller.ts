import { AddTransactionController } from "@/presentation/controllers/transactions/add-transaction/add-transaction-controller";
import { makeControllerErrorDecorator } from "../../decorators/make-controller-error-decorator";
import { makeDbAddTransaction } from "../../usecases/transactions/make-db-add-transaction";
import { makeAddTransactionValidation } from "./make-add-transactions-validation";

export const makeAddTransactionController = () => {
  const addTransaction = makeDbAddTransaction();
  const validation = makeAddTransactionValidation();

  const addTransactionController = new AddTransactionController(
    addTransaction,
    validation,
  );

  return makeControllerErrorDecorator(addTransactionController);
};
