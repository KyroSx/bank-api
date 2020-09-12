import { NotAllowedParamError } from "@/presentation/errors/not-allowed-param-error";
import { AllowedFieldValidation } from "./allowed-field-validation";

const field = "any-field";

const makeSut = (list: any[] = [field], fieldName = "type") => {
  const sut = new AllowedFieldValidation(fieldName, list);

  return { sut };
};

describe("AllowedField Validation", () => {
  it("should return NotAllowedParamError if validation fails", async () => {
    const { sut } = makeSut([]);

    const error = await sut.validate(field);

    expect(error).toEqual(new NotAllowedParamError("type"));
  });

  it("should not return NotAllowedParamError if validation succeeds", async () => {
    const { sut } = makeSut();

    const error = await sut.validate(field);

    expect(error).toBeFalsy();
  });
});
