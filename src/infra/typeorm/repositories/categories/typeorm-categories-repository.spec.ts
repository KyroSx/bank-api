import { createTestConnection } from "@/infra/tests/create-test-connection";
import { getConnection } from "typeorm";
import { TypeOrmCategoriesRepository } from "./typeorm-categories-repository";

const makeSut = () => {
  const sut = new TypeOrmCategoriesRepository();
  return { sut };
};

describe("TypeOrm Categories Repository (Infra)", () => {
  beforeEach(() => {
    return createTestConnection();
  });

  afterEach(() => {
    const connection = getConnection();
    return connection.close();
  });

  it("should connect to in-memory database", () => {
    const { sut } = makeSut();
    expect(sut).toBeDefined();
  });

  it("should add new Category to database", async () => {
    const { sut } = makeSut();

    const category = await sut.fetchByTitle("any-title");

    expect(category.id).toBeDefined();
    expect(category).toEqual(expect.objectContaining({ title: "any-title" }));
  });
});
