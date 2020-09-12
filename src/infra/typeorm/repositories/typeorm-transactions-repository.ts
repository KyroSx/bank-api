import { Repository, getRepository } from "typeorm";
import {
  IAddTransactionRepository,
  AddTransactionRepositoryParams,
  IFetchBalanceRepository,
} from "@/data/protocols/repositories";
import { BalanceModel } from "@/domain/models";
import { Transaction } from "../entities";

export class TypeOrmTransactionsRepository
  implements IAddTransactionRepository, IFetchBalanceRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  async add(params: AddTransactionRepositoryParams) {
    const transaction = this.ormRepository.create(params);

    await this.ormRepository.save(transaction);

    return transaction;
  }

  async fetchBalance(): Promise<BalanceModel> {
    const allTransactions = await this.ormRepository.find();

    const balanceInitialValueToReduce = {
      income: 0,
      outcome: 0,
      total: 0,
    };

    const { income, outcome } = allTransactions.reduce(
      (accumulator: BalanceModel, transaction: Transaction) => {
        switch (transaction.type) {
          case "income":
            accumulator.income += transaction.value;
            break;
          case "outcome":
            accumulator.outcome += transaction.value;
            break;
          default:
            break;
        }
        return accumulator;
      },
      balanceInitialValueToReduce,
    );

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }
}
