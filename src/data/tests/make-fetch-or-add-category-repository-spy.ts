import { CategoryModel } from "@/domain/models";
import { IFetchOrAddCategoryRepository } from "@/data/protocols/repositories/fetch-or-add-category-repository";

class FetchOrAddCategoryRepositorySpy implements IFetchOrAddCategoryRepository {
  params: string;

  model: CategoryModel;

  async fetchByTitle(params: string): Promise<CategoryModel> {
    this.params = params;

    return this.model;
  }
}

export const makeFetchOrAddCategoryRepositorySpy = () => {
  return new FetchOrAddCategoryRepositorySpy();
};
