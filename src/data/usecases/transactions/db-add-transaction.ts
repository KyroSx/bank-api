import {
  AddTransactionParams,
  IFetchOrAddCategoryRepository,
  IFetchBalanceRepository,
} from "./db-add-transaction-protocols";

export class DbAddTransaction {
  constructor(
    private readonly fetchOrAddCategoryRepository: IFetchOrAddCategoryRepository,
    private readonly fetchBalanceRepository: IFetchBalanceRepository,
  ) {}

  async add(addTransactionParams: AddTransactionParams): Promise<any> {
    const { type, category: categoryTitle } = addTransactionParams;

    await this.fetchOrAddCategoryRepository.fetchByTitle(categoryTitle);

    if (type === "outcome") {
      await this.fetchBalanceRepository.fetchBalance();
    }

    return null;
  }
}
