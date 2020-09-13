import { DbFetchTransactions } from "@/data/usecases/transactions/fetch-transactions/db-fetch-transactions";
import { TypeOrmTransactionsRepository } from "@/infra/typeorm/repositories/transactions/typeorm-transactions-repository";

export const makeDbAddTransaction = (): DbFetchTransactions => {
  const transactionsRepository = new TypeOrmTransactionsRepository();

  const dbFetchTransactions = new DbFetchTransactions(
    transactionsRepository,
    transactionsRepository,
  );

  return dbFetchTransactions;
};
