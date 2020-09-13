import { success } from "@/presentation/helpers/http-helper";
import { IFetchTransactions } from "./fetch-transactions-controller-protocols";

export class FetchTransactionsController {
  constructor(private readonly fetchTransactions: IFetchTransactions) {}

  async handle() {
    const transactions = await this.fetchTransactions.fetch();

    return success(transactions);
  }
}
