import { makeDeleteTransactionRepositorySpy } from "@/data/tests/make-delete-repository-spy";
import { mockThrowError } from "@/domain/tests";
import { DbDeleteTransaction } from "./db-delete-transaction";

const makeSut = () => {
  const deleteTransactionRepositorySpy = makeDeleteTransactionRepositorySpy();
  const sut = new DbDeleteTransaction(deleteTransactionRepositorySpy);

  return { sut, deleteTransactionRepositorySpy };
};

const mockDeleteTransactionParams = () => ({ transaction_id: "uuid" });

describe("Data => Db Delete Transaction", () => {
  it("should call DeleteTransactionRepository with correct values", async () => {
    const { sut, deleteTransactionRepositorySpy } = makeSut();

    const { transaction_id } = mockDeleteTransactionParams();

    await sut.delete({ transaction_id });

    expect(deleteTransactionRepositorySpy.params).toEqual({ transaction_id });
  });

  it("should throw if DeleteTransactionRepository throws", async () => {
    const { sut, deleteTransactionRepositorySpy } = makeSut();

    jest
      .spyOn(deleteTransactionRepositorySpy, "delete")
      .mockImplementationOnce(mockThrowError);

    const promise = sut.delete(mockDeleteTransactionParams());

    await expect(promise).rejects.toThrow();
  });
});
