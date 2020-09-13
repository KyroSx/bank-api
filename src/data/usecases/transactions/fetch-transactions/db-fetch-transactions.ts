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
    await this.fetchTransactionsRepository.fetch();

    await this.fetchBalanceRepository.fetchBalance();

    return null;
  }
}
