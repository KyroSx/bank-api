import { TransactionsWithBalanceModel } from "../usecases/fetch-transactions-with-balance";
import { mockBalanceModel } from "./mock-balance-model";
import { mockTransactionModel } from "./mock-transaction-model";

export const mockTransactionsWithBalanceModel = (
  length = 5,
): TransactionsWithBalanceModel => {
  const transactions = Array.from({ length }, () => mockTransactionModel());

  const balance = mockBalanceModel();

  return { transactions, balance };
};
