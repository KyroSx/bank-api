import { BalanceModel, TransactionModel } from "@/domain/models";

export type TransactionsWithBalanceModel = {
  transactions: TransactionModel[];
  balance: BalanceModel;
};

export interface IFetchTransactionsWithBalance {
  fetch: () => Promise<TransactionsWithBalanceModel>;
}
