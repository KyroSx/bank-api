import { MissingParamError } from "@/presentation/errors";
import { makeValidationSpy } from "@/presentation/tests";
import { ValidationComposite } from "./validation-composite";

const field = "any-field";

const makeSut = () => {
  const validationSpies = [makeValidationSpy(), makeValidationSpy()];
  const sut = new ValidationComposite(validationSpies);
  return {
    sut,
    validationSpies,
  };
};

describe("Validation Composite", () => {
  it("should return an error if any validation fails", async () => {
    const { sut, validationSpies } = makeSut();

    validationSpies[1].error = new MissingParamError(field);
    const error = await sut.validate({ [field]: field });

    expect(error).toEqual(validationSpies[1].error);
  });

  it("should return the first error if more then one validation fails", async () => {
    const { sut, validationSpies } = makeSut();

    validationSpies[0].error = new Error();
    validationSpies[1].error = new MissingParamError(field);

    const error = await sut.validate({ [field]: field });

    expect(error).toEqual(validationSpies[0].error);
  });
});
