import {
  AddTransactionParams,
  IFetchOrAddCategoryRepository,
} from "./db-add-transaction-protocols";

export class DbAddTransaction {
  constructor(
    private readonly fetchOrAddCategoryRepository: IFetchOrAddCategoryRepository,
  ) {}

  async add(addTransactionParams: AddTransactionParams): Promise<any> {
    await this.fetchOrAddCategoryRepository.fetchByTitle(
      addTransactionParams.category,
    );
    return null;
  }
}
