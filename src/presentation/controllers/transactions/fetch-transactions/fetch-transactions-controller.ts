import { IFetchTransactions } from "./fetch-transactions-controller-protocols";

export class FetchTransactionsController {
  constructor(private readonly fetchTransactions: IFetchTransactions) {}

  async handle() {
    await this.fetchTransactions.fetch();

    return null;
  }
}
