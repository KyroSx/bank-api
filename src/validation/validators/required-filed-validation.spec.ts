import { MissingParamError } from "@/presentation/errors";
import { RequiredFieldValidation } from "./required-field-validation";

const field = "any-field";

const makeSut = () => {
  const sut = new RequiredFieldValidation(field);
  return { sut };
};

describe("RequiredField Validation", () => {
  it("should return a MissingParamError if validation fails", async () => {
    const { sut } = makeSut();

    const error = await sut.validate({ invalidField: field });

    expect(error).toEqual(new MissingParamError(field));
  });
});
