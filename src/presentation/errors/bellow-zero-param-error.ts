export class BellowZeroParamError extends Error {
  constructor(paramName: string) {
    super(`Bellow Zero: ${paramName} <= ${0}`);
    this.name = "BellowZeroParamError";
  }
}
