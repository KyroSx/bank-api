import { TransactionModel } from "../models/transaction";
import { mockCategoryModel } from "./mock-category-model";

export const mockTransactionModel = (): TransactionModel => ({
  id: "uuid",
  title: "Earnings",
  value: 3000,
  type: "income",
  category: mockCategoryModel(),
});
