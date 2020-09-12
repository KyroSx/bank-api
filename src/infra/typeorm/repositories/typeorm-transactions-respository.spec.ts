import { getConnection, createConnection, getRepository } from "typeorm";
import { mockTransactionModel } from "@/domain/tests";
import { Category, Transaction } from "../entities";
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

const insertCategory = async (): Promise<Category> => {
  const repo = getRepository(Category);
  const category = repo.create({ title: "any-title" });

  await repo.save(category);

  return category;
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

    const category = await insertCategory();
    const params = mockAddTransactionRepositoryParams(category);

    const transaction = await sut.add(params);

    expect(transaction.id).toBeDefined();
    expect(transaction.category).toEqual(category);
    expect(transaction).toEqual(expect.objectContaining({ ...params }));
  });
});
