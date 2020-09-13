import { IFetchTransactionsRepository } from "./db-fetch-transactions-procotols";

export class DbFetchTransactions {
  constructor(
    private readonly fetchTransactions: IFetchTransactionsRepository,
  ) {}

  async fetch() {
    await this.fetchTransactions.fetch();

    return null;
  }
}
