import { Repository, getRepository } from "typeorm";
import {
  IAddTransactionRepository,
  AddTransactionRepositoryParams,
  IFetchBalanceRepository,
  IFetchTransactionsRepository,
} from "@/data/protocols/repositories";
import { BalanceModel, TransactionModel } from "@/domain/models";
import { Transaction } from "../../entities";

export class TypeOrmTransactionsRepository
  implements
    IAddTransactionRepository,
    IFetchBalanceRepository,
    IFetchTransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  async fetch(): Promise<TransactionModel[]> {
    const allTransactions = await this.ormRepository.find();

    return allTransactions;
  }

  async add(params: AddTransactionRepositoryParams) {
    const transaction = this.ormRepository.create(params);

    await this.ormRepository.save(transaction);

    return transaction;
  }

  async fetchBalance(): Promise<BalanceModel> {
    const allTransactions = await this.fetch();

    const balanceInitialValueToReduce = {
      income: 0,
      outcome: 0,
      total: 0,
    };

    const { income, outcome } = allTransactions.reduce(
      (accumulator: BalanceModel, transaction: Transaction) => {
        const { type } = transaction;

        accumulator[type] += transaction.value;

        return accumulator;
      },
      balanceInitialValueToReduce,
    );

    const balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }
}
