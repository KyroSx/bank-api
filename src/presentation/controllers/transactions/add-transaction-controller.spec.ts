import { makeAddTransactionSpy } from "@/presentation/tests/mock-transaction-usecase";
import { mockThrowError } from "@/domain/tests/mock-throw-error";
import { AddTransactionController } from "./add-transaction-controller";

const makeSut = () => {
  const addTransactionSpy = makeAddTransactionSpy();
  const sut = new AddTransactionController(addTransactionSpy);

  return { sut, addTransactionSpy };
};

const mockHttpRequest = () => ({
  body: {
    title: "Earnings",
    value: 3000,
    type: "income",
    category: "Eating",
  },
});

describe("Add Transaction Controller (Presentation)", () => {
  it("should call AddTransaction with correct values", async () => {
    const { sut, addTransactionSpy } = makeSut();

    const httpRequest = mockHttpRequest();

    await sut.handle(httpRequest);

    expect(addTransactionSpy.params).toEqual(httpRequest.body);
  });

  it("should not catch error if AddTransaction throws", async () => {
    const { sut, addTransactionSpy } = makeSut();

    jest.spyOn(addTransactionSpy, "add").mockImplementationOnce(mockThrowError);

    const promise = sut.handle(mockHttpRequest());

    await expect(promise).rejects.toThrow();
  });
});
