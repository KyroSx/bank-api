import { success } from "@/presentation/helpers/http-helper";
import {
  HttpRequest,
  HttpResponse,
  IController,
  IFetchTransactionsWithBalance,
} from "./fetch-transactions-controller-protocols";

export class FetchTransactionsWithBalanceController implements IController {
  constructor(
    private readonly fetchTransactions: IFetchTransactionsWithBalance,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(httpRequest?: HttpRequest): Promise<HttpResponse> {
    const transactions = await this.fetchTransactions.fetch();

    return success(transactions);
  }
}
