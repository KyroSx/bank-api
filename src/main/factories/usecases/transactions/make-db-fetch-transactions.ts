import { DbFetchTransactionsWithBalance } from "@/data/usecases/transactions/";
import { TypeOrmTransactionsRepository } from "@/infra/typeorm/repositories/transactions/typeorm-transactions-repository";

export const makeDbFetchTransactionsWithBalance = (): DbFetchTransactionsWithBalance => {
  const transactionsRepository = new TypeOrmTransactionsRepository();

  const dbFetchTransactions = new DbFetchTransactionsWithBalance(
    transactionsRepository,
    transactionsRepository,
  );

  return dbFetchTransactions;
};
