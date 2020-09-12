import { IValidation } from "@/presentation/protocols";
import { ValidationComposite } from "@/validation/composite/validation-composite";
import {
  OverLimitFieldValidation,
  RequiredFieldValidation,
} from "@/validation/validators";

export const makeAddTransactionValidation = (): IValidation => {
  const validations: IValidation[] = [];
  const requiredFields = ["title", "value", "type", "category"];

  for (const field of requiredFields) {
    validations.push(new RequiredFieldValidation(field));
  }

  validations.push(new OverLimitFieldValidation("type", 0));

  const addTransactionValidation = new ValidationComposite(validations);

  return addTransactionValidation;
};
