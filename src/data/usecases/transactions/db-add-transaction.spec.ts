import { AddTransactionParams } from "@/domain/usecases/add-transaction";
import { makeFetchOrAddCategoryRepositorySpy } from "@/data/tests/make-fetch-or-add-category-repository-spy";
import { DbAddTransaction } from "./db-add-transaction";

const makeSut = () => {
  const fetchOrAddCategoryRepositorySpy = makeFetchOrAddCategoryRepositorySpy();
  const sut = new DbAddTransaction(fetchOrAddCategoryRepositorySpy);

  return { sut, fetchOrAddCategoryRepositorySpy };
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
});
