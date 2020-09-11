import { TransactionModel } from "@/domain/models";

export type AddTransactionRepositoryParams = Omit<TransactionModel, "id">;

export interface IAddTransactionRepository {
  add: (params: AddTransactionRepositoryParams) => Promise<TransactionModel>;
}
