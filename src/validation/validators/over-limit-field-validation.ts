import { BellowZeroParamError } from "@/presentation/errors";
import { IValidation } from "@/presentation/protocols";

export class OverLimitFieldValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly limit: number,
  ) {}

  async validate(input: any): Promise<Error | null> {
    return new BellowZeroParamError(this.fieldName);
  }
}
