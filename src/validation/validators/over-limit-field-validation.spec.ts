import { BellowZeroParamError } from "@/presentation/errors";
import { OverLimitFieldValidation } from "./over-limit-field-validation";

const fieldValue = 100;
const fieldName = "value";

const makeSut = (limit = 0, fieldName = "value") => {
  const sut = new OverLimitFieldValidation(fieldName, limit);

  return { sut };
};

describe("Over Limit Field Validation", () => {
  it("should return UnderLimitParamError if validation fails", async () => {
    const { sut } = makeSut();

    const error = await sut.validate({ [fieldName]: fieldValue });

    expect(error).toEqual(new BellowZeroParamError(fieldName));
  });
});
