import { IValidation } from "../protocols";

class ValidationSpy implements IValidation {
  params: any;

  error: Error | null = null;

  async validate(params: any): Promise<Error | null> {
    this.params = params;

    return this.error;
  }
}

export const makeValidationSpy = (): ValidationSpy => new ValidationSpy();
