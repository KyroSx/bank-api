import { getConnection, createConnection } from "typeorm";
import { mockTransactionModel } from "@/domain/tests";
import { addTypeOrmCategory } from "@/infra/tests/typeorm-category";
import { addTypeOrmTransaction } from "@/infra/tests/typeorm-transaction";
import { Category, Transaction } from "../../entities";
import { TypeOrmTransactionsRepository } from "./typeorm-transactions-repository";

const makeSut = () => {
  const sut = new TypeOrmTransactionsRepository();
  return { sut };
};

const mockAddTransactionRepositoryParams = (category: Category) => {
  const model = mockTransactionModel();
  delete model.id;

  model.category = category;

  return model;
};

describe("Transactions Repository (Infra)", () => {
  beforeEach(() => {
    return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Category, Transaction],
      synchronize: true,
      logging: false,
    });
  });

  afterEach(() => {
    const connection = getConnection();
    return connection.close();
  });

  it("should connect to in-memory database", () => {
    const { sut } = makeSut();
    expect(sut).toBeDefined();
  });

  it("should add Transaction to database", async () => {
    const { sut } = makeSut();

    const category = await addTypeOrmCategory();
    const params = mockAddTransactionRepositoryParams(category);

    const transaction = await sut.add(params);

    expect(transaction.id).toBeDefined();
    expect(transaction.category).toEqual(category);
    expect(transaction).toEqual(expect.objectContaining({ ...params }));
  });

  it("should return the correct Balance", async () => {
    const { sut } = makeSut();

    const category = await addTypeOrmCategory();

    const transaction_income = mockAddTransactionRepositoryParams(category);
    transaction_income.type = "income";
    transaction_income.value = 1000;

    const transaction_outcome = mockAddTransactionRepositoryParams(category);
    transaction_outcome.type = "outcome";
    transaction_outcome.value = 1000;

    await addTypeOrmTransaction(transaction_income);
    await addTypeOrmTransaction(transaction_outcome);

    const balance = await sut.fetchBalance();

    expect(balance).toEqual({
      total: 0,
      income: 1000,
      outcome: 1000,
    });
  });
});
