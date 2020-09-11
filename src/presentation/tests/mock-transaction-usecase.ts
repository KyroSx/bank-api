import {
  IAddTransaction,
  AddTransactionParams,
} from "@/domain/usecases/add-transaction";
import { TransactionModel } from "@/domain/models";
import { mockTransactionModel } from "@/domain/tests";

class AddTransactionSpy implements IAddTransaction {
  params: AddTransactionParams;

  model: TransactionModel = mockTransactionModel();

  async add(params: AddTransactionParams): Promise<TransactionModel> {
    this.params = params;

    return this.model;
  }
}

export const makeAddTransactionSpy = () => new AddTransactionSpy();
