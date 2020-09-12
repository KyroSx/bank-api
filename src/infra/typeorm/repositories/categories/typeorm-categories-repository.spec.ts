import { createTestConnection } from "@/infra/tests/create-test-connection";
import { getConnection } from "typeorm";

const makeSut = () => {
  const sut = null;
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
});
