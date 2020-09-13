import { DeleteTransactionParams } from "@/domain/usecases/delete-transaction";
import { IDeleteTransactionRepository } from "../protocols/repositories";

class DeleteTransactionRepositorySpy implements IDeleteTransactionRepository {
  params: DeleteTransactionParams;

  async delete(params: DeleteTransactionParams): Promise<void> {
    this.params = params;
  }
}

export const makeDeleteTransactionRepositorySpy = () => {
  return new DeleteTransactionRepositorySpy();
};
