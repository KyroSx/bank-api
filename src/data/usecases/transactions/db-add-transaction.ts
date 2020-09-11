import {
  AddTransactionParams,
  IFetchOrAddCategoryRepository,
  IFetchBalanceRepository,
  IAddTransactionRepository,
} from "./db-add-transaction-protocols";

export class DbAddTransaction {
  constructor(
    private readonly fetchOrAddCategoryRepository: IFetchOrAddCategoryRepository,
    private readonly fetchBalanceRepository: IFetchBalanceRepository,
    private readonly addTransactionRepository: IAddTransactionRepository,
  ) {}

  async add(addTransactionParams: AddTransactionParams): Promise<any> {
    const {
      title,
      value,
      type,
      category: categoryTitle,
    } = addTransactionParams;

    const category = await this.fetchOrAddCategoryRepository.fetchByTitle(
      categoryTitle,
    );

    if (type === "outcome") {
      const { total } = await this.fetchBalanceRepository.fetchBalance();

      if (total < value) {
        return null;
      }
    }

    const transaction = await this.addTransactionRepository.add({
      title,
      value,
      type,
      category,
    });

    return transaction;
  }
}
