import { IValidation } from "@/presentation/protocols";

export class ValidationComposite implements IValidation {
  constructor(private readonly validations: IValidation[]) {}

  async validate(input: any): Promise<Error | null> {
    const errors = await Promise.all(
      this.validations.map(async (validation) => {
        const error = await validation.validate(input);

        if (error) {
          return error;
        }

        return null;
      }),
    );

    const errorFound = errors.find((error) => error instanceof Error);

    return errorFound;
  }
}
