export class InsufficientBalanceError extends Error {
  constructor() {
    super("Insufficient Balance");
    this.name = "InsufficientBalanceError";
  }
}
