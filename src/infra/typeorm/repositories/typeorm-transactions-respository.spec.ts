import { getConnection, createConnection } from "typeorm";
import { Category, Transaction } from "../entities";
import { TypeOrmTransactionsRepository } from "./typeorm-transactions-repository";

const makeSut = () => {
  const sut = new TypeOrmTransactionsRepository();
  return { sut };
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
});
