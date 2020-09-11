import { makeAddTransactionSpy } from "@/presentation/tests/mock-transaction-usecase";
import { mockThrowError } from "@/domain/tests/mock-throw-error";
import { makeValidationSpy } from "@/presentation/tests/mock-validation";
import { badRequest, success } from "@/presentation/helpers/http-helper";
import { AddTransactionController } from "./add-transaction-controller";

const makeSut = () => {
  const validationSpy = makeValidationSpy();
  const addTransactionSpy = makeAddTransactionSpy();
  const sut = new AddTransactionController(addTransactionSpy, validationSpy);

  return { sut, addTransactionSpy, validationSpy };
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

  it("should call Validation with correct values", async () => {
    const { sut, validationSpy } = makeSut();

    const httpRequest = mockHttpRequest();

    await sut.handle(httpRequest);

    expect(validationSpy.params).toEqual(httpRequest.body);
  });

  it("should return bad-request (400) if Validation return Error", async () => {
    const { sut, validationSpy } = makeSut();

    const error = new Error("Error Spy");

    validationSpy.error = error;

    const httpResponse = await sut.handle(mockHttpRequest());

    expect(httpResponse).toEqual(badRequest(error));
  });

  it("should return success (200) if AddTransaction succeed", async () => {
    const { sut, addTransactionSpy } = makeSut();

    const httpResponse = await sut.handle(mockHttpRequest());

    expect(httpResponse).toEqual(success(addTransactionSpy.model));
  });
});
