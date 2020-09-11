import { IFetchOrAddCategoryRepository } from "@/data/protocols/fetch-or-add-category-repository";
import { AddTransactionParams } from "./db-add-transaction-protocols";

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
