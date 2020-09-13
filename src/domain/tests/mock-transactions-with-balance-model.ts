import { TransactionsWithBalanceModel } from "../usecases/fetch-transactions";
import { mockTransactionModel } from "./mock-transaction-model";

export const mockTransactionsWithBalanceModel = (
  length = 5,
): TransactionsWithBalanceModel => {
  const transactions = Array.from({ length }).map(() => mockTransactionModel());

  const balance = { total: 1000, income: 2000, outcome: 1000 };

  return { transactions, balance };
};
