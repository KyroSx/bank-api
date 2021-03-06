import {
  makeFetchBalanceRepositorySpy,
  makeFetchTransactionsRepositorySpy,
} from "@/data/tests";
import {
  mockThrowError,
  mockTransactionsWithBalanceModel,
} from "@/domain/tests";
import { mockBalanceModel } from "@/domain/tests/mock-balance-model";
import { DbFetchTransactionsWithBalance } from "./db-fetch-transactions";

const makeSut = () => {
  const fetchTransactionsRepositorySpy = makeFetchTransactionsRepositorySpy();
  const fetchBalanceRepositorySpy = makeFetchBalanceRepositorySpy();
  const sut = new DbFetchTransactionsWithBalance(
    fetchTransactionsRepositorySpy,
    fetchBalanceRepositorySpy,
  );

  return { sut, fetchTransactionsRepositorySpy, fetchBalanceRepositorySpy };
};

describe("Data => Db Fetch Transactions With Balance", () => {
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

  it("should return TransactionsWithBalanceModel", async () => {
    const { sut, fetchBalanceRepositorySpy } = makeSut();

    fetchBalanceRepositorySpy.model = mockBalanceModel();
    const mockTransactionsWithBalance = mockTransactionsWithBalanceModel();

    const transactionsWithBalance = await sut.fetch();

    expect(transactionsWithBalance).toEqual(mockTransactionsWithBalance);
  });

  it("should throw if FetchBalanceRepository throws", async () => {
    const { sut, fetchBalanceRepositorySpy } = makeSut();

    jest
      .spyOn(fetchBalanceRepositorySpy, "fetchBalance")
      .mockImplementationOnce(mockThrowError);

    const promise = sut.fetch();

    await expect(promise).rejects.toThrow();
  });

  it("should throw if FetchTransactionsRepository throws", async () => {
    const { sut, fetchTransactionsRepositorySpy } = makeSut();

    jest
      .spyOn(fetchTransactionsRepositorySpy, "fetch")
      .mockImplementationOnce(mockThrowError);

    const promise = sut.fetch();

    await expect(promise).rejects.toThrow();
  });
});
