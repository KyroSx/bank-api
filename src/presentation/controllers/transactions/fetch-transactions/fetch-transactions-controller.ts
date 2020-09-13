import { success } from "@/presentation/helpers/http-helper";
import {
  HttpRequest,
  HttpResponse,
  IController,
  IFetchTransactions,
} from "./fetch-transactions-controller-protocols";

export class FetchTransactionsController implements IController {
  constructor(private readonly fetchTransactions: IFetchTransactions) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(httpRequest?: HttpRequest): Promise<HttpResponse> {
    const transactions = await this.fetchTransactions.fetch();

    return success(transactions);
  }
}
