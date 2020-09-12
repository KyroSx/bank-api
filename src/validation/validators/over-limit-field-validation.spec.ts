import { BellowZeroParamError } from "@/presentation/errors";
import { OverLimitFieldValidation } from "./over-limit-field-validation";

const fieldName = "value";

const makeSut = (limit = 0, fieldName = "value") => {
  const sut = new OverLimitFieldValidation(fieldName, limit);

  return { sut };
};

describe("Over Limit Field Validation", () => {
  it("should return BellowZeroParamError if validation fails", async () => {
    const { sut } = makeSut();

    const error = await sut.validate({ [fieldName]: -1 });

    expect(error).toEqual(new BellowZeroParamError(fieldName));
  });

  it("should not return BellowZeroParamError if validation succeeds", async () => {
    const { sut } = makeSut();

    const error = await sut.validate({ [fieldName]: 1 });

    expect(error).toBeFalsy();
  });
});
