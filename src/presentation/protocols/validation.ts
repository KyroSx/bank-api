export interface IValidation {
  validate: (params: any) => Promise<Error | null>;
}
