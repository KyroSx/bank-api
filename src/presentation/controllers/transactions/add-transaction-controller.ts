import {
  IAddTransaction,
  IValidation,
} from "./add-transaction-controller-protocols";

export class AddTransactionController {
  constructor(
    private readonly addTransaction: IAddTransaction,
    private readonly validation: IValidation,
  ) {}

  async handle(httpRequest: any): Promise<any> {
    await this.validation.validate(httpRequest.body);

    const { title, value, type, category } = httpRequest.body;

    await this.addTransaction.add({ title, value, type, category });
  }
}
