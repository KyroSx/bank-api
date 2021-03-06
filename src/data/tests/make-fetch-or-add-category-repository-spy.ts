import { CategoryModel } from "@/domain/models";
import { IFetchOrAddCategoryRepository } from "@/data/protocols/repositories/";
import { mockCategoryModel } from "@/domain/tests";

class FetchOrAddCategoryRepositorySpy implements IFetchOrAddCategoryRepository {
  params: string;

  model: CategoryModel = mockCategoryModel();

  async fetchOrAddByTitle(params: string): Promise<CategoryModel> {
    this.params = params;

    return this.model;
  }
}

export const makeFetchOrAddCategoryRepositorySpy = () => {
  return new FetchOrAddCategoryRepositorySpy();
};
