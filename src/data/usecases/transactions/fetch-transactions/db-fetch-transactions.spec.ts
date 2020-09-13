import { makeFetchTransactionsRepositorySpy } from "@/data/tests";
import { DbFetchTransactions } from "./db-fetch-transactions";

const makeSut = () => {
  const fetchTransactionsRepositorySpy = makeFetchTransactionsRepositorySpy();
  const sut = new DbFetchTransactions(fetchTransactionsRepositorySpy);

  return { sut, fetchTransactionsRepositorySpy };
};

describe("Data => Db Fetch Transactions", () => {
  it("should call FetchTransactionsRepository", async () => {
    const { sut, fetchTransactionsRepositorySpy } = makeSut();

    await sut.fetch();

    expect(fetchTransactionsRepositorySpy.calls).toBe(1);
  });
});
