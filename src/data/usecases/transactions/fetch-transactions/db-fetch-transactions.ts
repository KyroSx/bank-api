import {
  IFetchBalanceRepository,
  IFetchTransactionsRepository,
} from "./db-fetch-transactions-procotols";

export class DbFetchTransactions {
  constructor(
    private readonly fetchTransactionsRepository: IFetchTransactionsRepository,
    private readonly fetchBalanceRepository: IFetchBalanceRepository,
  ) {}

  async fetch() {
    const transactions = await this.fetchTransactionsRepository.fetch();

    const balance = await this.fetchBalanceRepository.fetchBalance();

    const transactionWithBalance = {
      transactions,
      balance,
    };

    return transactionWithBalance;
  }
}
