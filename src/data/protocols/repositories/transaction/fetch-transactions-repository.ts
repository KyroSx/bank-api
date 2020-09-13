import { TransactionModel } from "@/domain/models";

export interface IFetchTransactionsRepository {
  fetch: () => Promise<TransactionModel[]>;
}
