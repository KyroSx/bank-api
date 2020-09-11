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
    await this.fetchOrAddCategoryRepository.fetchByTitle(
      addTransactionParams.category,
    );

    await this.fetchBalanceRepository.fetchBalance();

    return null;
  }
}
