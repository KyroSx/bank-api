import {
  IFetchBalanceRepository,
  IFetchTransactions,
  IFetchTransactionsRepository,
  TransactionsWithBalanceModel,
} from "./db-fetch-transactions-protocols";

export class DbFetchTransactions implements IFetchTransactions {
  constructor(
    private readonly fetchTransactionsRepository: IFetchTransactionsRepository,
    private readonly fetchBalanceRepository: IFetchBalanceRepository,
  ) {}

  async fetch(): Promise<TransactionsWithBalanceModel> {
    const transactions = await this.fetchTransactionsRepository.fetch();

    const balance = await this.fetchBalanceRepository.fetchBalance();

    const transactionWithBalance = {
      transactions,
      balance,
    };

    return transactionWithBalance;
  }
}
