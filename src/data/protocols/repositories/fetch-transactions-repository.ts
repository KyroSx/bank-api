import { TransactionsWithBalanceModel } from "@/domain/usecases/fetch-transactions";

export interface IFetchTransactionsRepository {
  fetch: () => Promise<TransactionsWithBalanceModel>;
}
