import { Repository, getRepository } from "typeorm";
import {
  IAddTransactionRepository,
  AddTransactionRepositoryParams,
} from "@/data/protocols/repositories";
import { Transaction } from "../entities";

export class TypeOrmTransactionsRepository
  implements IAddTransactionRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  async add(params: AddTransactionRepositoryParams) {
    const transaction = this.ormRepository.create(params);

    await this.ormRepository.save(transaction);

    return transaction;
  }
}
