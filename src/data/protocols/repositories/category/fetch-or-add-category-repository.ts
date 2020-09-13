import { CategoryModel } from "@/domain/models";

export interface IFetchOrAddCategoryRepository {
  fetchOrAddByTitle: (title: string) => Promise<CategoryModel>;
}
