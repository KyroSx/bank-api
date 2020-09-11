import { IAddTransaction } from "./add-transaction-controller-protocols";

export class AddTransactionController {
  constructor(private readonly addTransaction: IAddTransaction) {}

  async handle(httpRequest: any): Promise<any> {
    const { title, value, type, category } = httpRequest.body;

    await this.addTransaction.add({ title, value, type, category });

    return null;
  }
}
