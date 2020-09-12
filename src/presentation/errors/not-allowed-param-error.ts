export class NotAllowedParamError extends Error {
  constructor(paramName: string) {
    super(`Param not allowed: ${paramName}`);
    this.name = "NotAllowedParamError";
  }
}
