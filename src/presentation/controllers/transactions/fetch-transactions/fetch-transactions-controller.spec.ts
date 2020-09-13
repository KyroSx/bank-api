import { mockThrowError } from "@/domain/tests";
import { success } from "@/presentation/helpers/http-helper";
import { makeFetchTransactionsSpy } from "@/presentation/tests";
import { FetchTransactionsController } from "./fetch-transactions-controller";

const makeSut = () => {
  const fetchTransactions = makeFetchTransactionsSpy();
  const sut = new FetchTransactionsController(fetchTransactions);

  return { sut, fetchTransactions };
};

describe("Presentation => Fetch Transactions Controller", () => {
  it("should call FetchTransactions", async () => {
    const { sut, fetchTransactions } = makeSut();

    await sut.handle();

    expect(fetchTransactions.calls).toBe(1);
  });

  it("should return success (200) with TransactionsWithBalanceModel", async () => {
    const { sut, fetchTransactions } = makeSut();

    const transaction = await sut.handle();

    expect(transaction).toEqual(success(fetchTransactions.model));
  });

  it("should throw if FetchTransactions throws", async () => {
    const { sut, fetchTransactions } = makeSut();

    jest
      .spyOn(fetchTransactions, "fetch")
      .mockImplementationOnce(mockThrowError);

    const promise = sut.handle();

    await expect(promise).rejects.toThrow();
  });
});
