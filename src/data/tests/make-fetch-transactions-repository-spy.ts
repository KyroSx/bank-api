import { TransactionModel } from "@/domain/models";
import { mockTransactionModel } from "@/domain/tests";
import { IFetchTransactionsRepository } from "../protocols/repositories";

class FetchTransactionsRepositorySpy implements IFetchTransactionsRepository {
  model: TransactionModel[] = Array.from({ length: 5 }, () =>
    mockTransactionModel(),
  );

  calls = 0;

  async fetch(): Promise<TransactionModel[]> {
    this.calls += 1;

    return this.model;
  }
}

export const makeFetchTransactionsRepositorySpy = () => {
  return new FetchTransactionsRepositorySpy();
};
