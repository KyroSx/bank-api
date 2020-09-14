import { makeControllerErrorDecorator } from "@/main/factories/decorators/make-controller-error-decorator";
import { makeDbFetchTransactionsWithBalance } from "@/main/factories/usecases/transactions";
import { FetchTransactionsWithBalanceController } from "@/presentation/controllers/transactions/";

export const makeFetchTransactionsWithBalanceController = () => {
  const dbFetchTransactions = makeDbFetchTransactionsWithBalance();

  const addTransactionController = new FetchTransactionsWithBalanceController(
    dbFetchTransactions,
  );

  return makeControllerErrorDecorator(addTransactionController);
};
