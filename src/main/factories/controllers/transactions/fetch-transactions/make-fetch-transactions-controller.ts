import { makeControllerErrorDecorator } from "@/main/factories/decorators/make-controller-error-decorator";
import { makeDbFetchTransactions } from "@/main/factories/usecases/transactions";
import { FetchTransactionsController } from "@/presentation/controllers/transactions/";

export const makeFetchTransactionsController = () => {
  const dbFetchTransactions = makeDbFetchTransactions();

  const addTransactionController = new FetchTransactionsController(
    dbFetchTransactions,
  );

  return makeControllerErrorDecorator(addTransactionController);
};
