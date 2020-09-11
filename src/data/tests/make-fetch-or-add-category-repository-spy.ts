import { CategoryModel } from "@/domain/models";
import { IFetchOrAddCategoryRepository } from "@/data/protocols/repositories/fetch-or-add-category-repository";
import { mockCategoryModel } from "@/domain/tests";

class FetchOrAddCategoryRepositorySpy implements IFetchOrAddCategoryRepository {
  params: string;

  model: CategoryModel = mockCategoryModel();

  async fetchByTitle(params: string): Promise<CategoryModel> {
    this.params = params;

    return this.model;
  }
}

export const makeFetchOrAddCategoryRepositorySpy = () => {
  return new FetchOrAddCategoryRepositorySpy();
};
