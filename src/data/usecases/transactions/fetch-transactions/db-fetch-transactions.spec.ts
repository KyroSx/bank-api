import {
  makeFetchBalanceRepositorySpy,
  makeFetchTransactionsRepositorySpy,
} from "@/data/tests";
import { DbFetchTransactions } from "./db-fetch-transactions";

const makeSut = () => {
  const fetchTransactionsRepositorySpy = makeFetchTransactionsRepositorySpy();
  const fetchBalanceRepositorySpy = makeFetchBalanceRepositorySpy();
  const sut = new DbFetchTransactions(
    fetchTransactionsRepositorySpy,
    fetchBalanceRepositorySpy,
  );

  return { sut, fetchTransactionsRepositorySpy, fetchBalanceRepositorySpy };
};

describe("Data => Db Fetch Transactions", () => {
  it("should call FetchTransactionsRepository", async () => {
    const { sut, fetchTransactionsRepositorySpy } = makeSut();

    await sut.fetch();

    expect(fetchTransactionsRepositorySpy.calls).toBe(1);
  });

  it("should call FetchBalanceRepository", async () => {
    const { sut, fetchBalanceRepositorySpy } = makeSut();

    await sut.fetch();

    expect(fetchBalanceRepositorySpy.calls).toBe(1);
  });
});
