import { BalanceModel, TransactionModel } from "@/domain/models";

export type TransactionsWithBalance = {
  transactions: TransactionModel[];
  balance: BalanceModel;
};

export interface IFetchTransactions {
  fetch: () => Promise<TransactionsWithBalance>;
}
