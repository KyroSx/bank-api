import { makeDeleteTransactionRepositorySpy } from "@/data/tests/make-delete-repository-spy";
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
});
