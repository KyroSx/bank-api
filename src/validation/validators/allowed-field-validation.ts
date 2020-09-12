import { IValidation } from "@/presentation/protocols";
import { NotAllowedParamError } from "@/presentation/errors";

export class AllowedFieldValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly allowedFields: string[],
  ) {}

  async validate(input: any): Promise<Error | null> {
    if (!this.allowedFields.includes(input[this.fieldName])) {
      return new NotAllowedParamError(this.fieldName);
    }

    return null;
  }
}
