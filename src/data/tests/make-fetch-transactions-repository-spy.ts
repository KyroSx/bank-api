import { mockTransactionsWithBalanceModel } from "@/domain/tests";
import { TransactionsWithBalanceModel } from "@/domain/usecases/fetch-transactions";
import { IFetchTransactionsRepository } from "../protocols/repositories";

class FetchTransactionsRepositorySpy implements IFetchTransactionsRepository {
  model: TransactionsWithBalanceModel = mockTransactionsWithBalanceModel();

  calls = 0;

  async fetch(): Promise<TransactionsWithBalanceModel> {
    this.calls += 1;

    return this.model;
  }
}

export const makeFetchTransactionsRepositorySpy = () => {
  return new FetchTransactionsRepositorySpy();
};
