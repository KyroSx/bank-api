import { CategoryModel } from "@/domain/models";

export interface IFetchOrAddCategoryRepository {
  fetchByTitle: (title: string) => Promise<CategoryModel>;
}
