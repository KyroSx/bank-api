import { makeControllerErrorDecorator } from "@/main/factories/decorators/make-controller-error-decorator";
import { makeDbAddTransaction } from "@/main/factories/usecases/transactions";
import { AddTransactionController } from "@/presentation/controllers/transactions/";
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
