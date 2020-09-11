import { CategoryModel } from "./category";

export type TransactionModel = {
  id: string;
  title: string;
  value: number;
  type: "income" | "outcome";
  category: CategoryModel;
};
