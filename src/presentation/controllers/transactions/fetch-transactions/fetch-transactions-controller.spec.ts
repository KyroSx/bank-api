import { mockThrowError } from "@/domain/tests";
import { success } from "@/presentation/helpers/http-helper";
import { makeFetchTransactionsSpy } from "@/presentation/tests";
import { FetchTransactionsWithBalanceController } from "./fetch-transactions-controller";

const makeSut = () => {
  const fetchTransactionsSpy = makeFetchTransactionsSpy();
  const sut = new FetchTransactionsWithBalanceController(fetchTransactionsSpy);

  return { sut, fetchTransactionsSpy };
};

describe("Presentation => Fetch Transactions Controller", () => {
  it("should call FetchTransactions", async () => {
    const { sut, fetchTransactionsSpy } = makeSut();

    await sut.handle();

    expect(fetchTransactionsSpy.calls).toBe(1);
  });

  it("should return success (200) with TransactionsWithBalanceModel", async () => {
    const { sut, fetchTransactionsSpy } = makeSut();

    const transaction = await sut.handle();

    expect(transaction).toEqual(success(fetchTransactionsSpy.model));
  });

  it("should throw if FetchTransactions throws", async () => {
    const { sut, fetchTransactionsSpy } = makeSut();

    jest
      .spyOn(fetchTransactionsSpy, "fetch")
      .mockImplementationOnce(mockThrowError);

    const promise = sut.handle();

    await expect(promise).rejects.toThrow();
  });
});
