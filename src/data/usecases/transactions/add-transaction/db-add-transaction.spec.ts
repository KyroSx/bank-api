import {
  makeFetchOrAddCategoryRepositorySpy,
  makeFetchBalanceRepositorySpy,
  makeAddTransactionRepositorySpy,
} from "@/data/tests";
import { DbAddTransaction } from "./db-add-transaction";
import { AddTransactionParams } from "./db-add-transaction-protocols";

const makeSut = () => {
  const fetchOrAddCategoryRepositorySpy = makeFetchOrAddCategoryRepositorySpy();
  const fetchBalanceRepositorySpy = makeFetchBalanceRepositorySpy();
  const addTransactionRepositorySpy = makeAddTransactionRepositorySpy();
  const sut = new DbAddTransaction(
    fetchOrAddCategoryRepositorySpy,
    fetchBalanceRepositorySpy,
    addTransactionRepositorySpy,
  );

  return {
    sut,
    fetchOrAddCategoryRepositorySpy,
    fetchBalanceRepositorySpy,
    addTransactionRepositorySpy,
  };
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
    const { sut, fetchBalanceRepositorySpy } = makeSut();

    const addTransactionParams = mockAddTransactionParams();
    addTransactionParams.type = "outcome";

    await sut.add(addTransactionParams);

    expect(fetchBalanceRepositorySpy.calls).toBe(1);
  });

  it("should not call FetchBalanceRepository if transaction.type is Income", async () => {
    const { sut, fetchBalanceRepositorySpy } = makeSut();

    const addTransactionParams = mockAddTransactionParams();
    addTransactionParams.type = "income";

    await sut.add(addTransactionParams);

    expect(fetchBalanceRepositorySpy.calls).toBe(0);
  });

  it("should return null if Outcome is greater than balance", async () => {
    const { sut, fetchBalanceRepositorySpy } = makeSut();

    fetchBalanceRepositorySpy.model = { total: 0, income: 0, outcome: 0 };

    const addTransactionParams = mockAddTransactionParams();
    addTransactionParams.type = "outcome";
    addTransactionParams.value = 10;

    const response = await sut.add(addTransactionParams);

    expect(response).toBeNull();
  });

  it("should call AddTransactionRepository with correct values", async () => {
    const {
      sut,
      addTransactionRepositorySpy,
      fetchOrAddCategoryRepositorySpy,
    } = makeSut();

    const addTransactionParams = mockAddTransactionParams();

    await sut.add(addTransactionParams);

    expect(addTransactionRepositorySpy.params).toEqual(
      expect.objectContaining({
        ...addTransactionParams,
        category: fetchOrAddCategoryRepositorySpy.model,
      }),
    );
  });

  it("should return TransactionModel if succeeds", async () => {
    const { sut } = makeSut();

    const addTransactionParams = mockAddTransactionParams();

    const transaction = await sut.add(addTransactionParams);

    expect(transaction.id).toBeDefined();
    expect(transaction.category.id).toBeDefined();
    expect(transaction).toEqual(expect.objectContaining({ ...transaction }));
  });
});
