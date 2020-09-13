import {
  DeleteTransactionParams,
  IDeleteTransaction,
  IDeleteTransactionRepository,
} from "./db-delete-transaction-protocols";

export class DbDeleteTransaction implements IDeleteTransaction {
  constructor(
    private readonly deleteTransactionRepository: IDeleteTransactionRepository,
  ) {}

  async delete(params: DeleteTransactionParams): Promise<void> {
    const { transaction_id } = params;

    await this.deleteTransactionRepository.delete({ transaction_id });
  }
}
