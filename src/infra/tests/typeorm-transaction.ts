import { getRepository } from "typeorm";
import { Transaction } from "../typeorm/entities";

export const addTypeOrmTransaction = async (transaction: Transaction) => {
  const transactionTypeorm = getRepository(Transaction).create({
    ...transaction,
  });

  await getRepository(Transaction).save(transactionTypeorm);

  return transaction;
};
