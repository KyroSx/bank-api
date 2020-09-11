import { TransactionModel } from "@/domain/models/transaction";

export type AddTransactionParams = {
  title: string;
  value: number;
  type: "income" | "outcome";
  category: string;
};

export interface IAddTransaction {
  add: (params: AddTransactionParams) => Promise<TransactionModel>;
}
