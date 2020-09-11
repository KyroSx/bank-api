import { AddTransactionParams } from "@/domain/usecases/add-transaction";
import { makeFetchOrAddCategoryRepositorySpy } from "@/data/tests/make-fetch-or-add-category-repository-spy";
import { makeFetchBalanceRepositorySpy } from "@/data/tests/make-fetch-balance-repository-spy";
import { DbAddTransaction } from "./db-add-transaction";

const makeSut = () => {
  const fetchBalanceRepository = makeFetchBalanceRepositorySpy();
  const fetchOrAddCategoryRepositorySpy = makeFetchOrAddCategoryRepositorySpy();
  const sut = new DbAddTransaction(
    fetchOrAddCategoryRepositorySpy,
    fetchBalanceRepository,
  );

  return { sut, fetchOrAddCategoryRepositorySpy, fetchBalanceRepository };
};

const mockAddTransactionParams = (): AddTransactionParams => ({
  title: "any-title",
  value: 18,
  type: "income",
  category: "any-category",
});

describe("Db Add Transaction (Data)", () => {
  it("should call FetchOrAddCategoryRepository with correct values", async () => {
    const { sut, fetchOrAddCategoryRepositorySpy } = makeSut();

    const addTransactionParams = mockAddTransactionParams();

    await sut.add(addTransactionParams);

    expect(fetchOrAddCategoryRepositorySpy.params).toEqual(
      addTransactionParams.category,
    );
  });

  it("should call FetchBalanceRepository if transaction.type is Outcome", async () => {
    const { sut, fetchBalanceRepository } = makeSut();

    const addTransactionParams = mockAddTransactionParams();
    addTransactionParams.type = "outcome";

    await sut.add(addTransactionParams);

    expect(fetchBalanceRepository.calls).toBe(1);
  });

  it("should not call FetchBalanceRepository if transaction.type is Income", async () => {
    const { sut, fetchBalanceRepository } = makeSut();

    const addTransactionParams = mockAddTransactionParams();
    addTransactionParams.type = "income";

    await sut.add(addTransactionParams);

    expect(fetchBalanceRepository.calls).toBe(0);
  });
});
