import { Repository, getRepository } from "typeorm";
import { Transaction } from "../entities";

export class TypeOrmTransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository("transactions");
  }
}
