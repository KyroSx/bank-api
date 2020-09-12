import { IValidation } from "@/presentation/protocols";
import { MissingParamError } from "@/presentation/errors";

export class RequiredFieldValidation implements IValidation {
  constructor(private readonly fieldName: string) {}

  async validate(input: any): Promise<Error | null> {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }

    return null;
  }
}
