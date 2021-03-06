import {
  IAddTransaction,
  AddTransactionParams,
} from "@/domain/usecases/add-transaction";
import { TransactionModel } from "@/domain/models";
import {
  mockTransactionModel,
  mockTransactionsWithBalanceModel,
} from "@/domain/tests";
import {
  IFetchTransactionsWithBalance,
  TransactionsWithBalanceModel,
} from "../controllers/transactions/fetch-transactions/fetch-transactions-controller-protocols";

class AddTransactionSpy implements IAddTransaction {
  params: AddTransactionParams;

  model: TransactionModel = mockTransactionModel();

  async add(params: AddTransactionParams): Promise<TransactionModel> {
    this.params = params;

    return this.model;
  }
}

export const makeAddTransactionSpy = () => new AddTransactionSpy();

class FetchTransactionsSpy implements IFetchTransactionsWithBalance {
  calls = 0;

  model: TransactionsWithBalanceModel = mockTransactionsWithBalanceModel();

  async fetch(): Promise<TransactionsWithBalanceModel> {
    this.calls += 1;

    return this.model;
  }
}

export const makeFetchTransactionsSpy = () => new FetchTransactionsSpy();
