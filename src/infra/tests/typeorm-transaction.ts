import { TransactionModel } from "@/domain/models";
import { getRepository } from "typeorm";
import { Transaction } from "../typeorm/entities";

export const addTypeOrmTransaction = async (transaction: TransactionModel) => {
  const transactionTypeorm = getRepository(Transaction).create({
    ...transaction,
  });

  await getRepository(Transaction).save(transactionTypeorm);

  return transaction;
};
