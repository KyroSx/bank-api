import { DbAddTransaction } from "@/data/usecases/transactions/db-add-transaction";
import { TypeOrmCategoriesRepository } from "@/infra/typeorm/repositories/categories/typeorm-categories-repository";
import { TypeOrmTransactionsRepository } from "@/infra/typeorm/repositories/transactions/typeorm-transactions-repository";

export const makeDbAddTransaction = (): DbAddTransaction => {
  const categoriesRepository = new TypeOrmCategoriesRepository();
  const transactionsRepository = new TypeOrmTransactionsRepository();

  const dbAddTransaction = new DbAddTransaction(
    categoriesRepository,
    transactionsRepository,
    transactionsRepository,
  );

  return dbAddTransaction;
};
