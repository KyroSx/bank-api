import {
  badRequest,
  success,
  forbidden,
} from "@/presentation/helpers/http-helper";
import {
  IAddTransaction,
  IValidation,
  IController,
  HttpRequest,
  HttpResponse,
} from "./add-transaction-controller-protocols";

export class AddTransactionController implements IController {
  constructor(
    private readonly addTransaction: IAddTransaction,
    private readonly validation: IValidation,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = await this.validation.validate(httpRequest.body);

    if (error) {
      return badRequest(error);
    }

    const { title, value, type, category } = httpRequest.body;

    const transaction = await this.addTransaction.add({
      title,
      value,
      type,
      category,
    });

    if (!transaction) {
      return forbidden(new Error());
    }

    return success(transaction);
  }
}
