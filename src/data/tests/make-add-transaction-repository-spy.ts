import { TransactionModel } from "@/domain/models";
import { mockTransactionModel } from "@/domain/tests";
import {
  IAddTransactionRepository,
  AddTransactionRepositoryParams,
} from "../protocols/repositories";

class AddTransactionRepositorySpy implements IAddTransactionRepository {
  params: AddTransactionRepositoryParams;

  model: TransactionModel = mockTransactionModel();

  async add(params: AddTransactionRepositoryParams): Promise<TransactionModel> {
    this.params = params;

    return this.model;
  }
}

export const makeAddTransactionRepositorySpy = () => {
  return new AddTransactionRepositorySpy();
};
