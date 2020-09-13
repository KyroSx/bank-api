import { DeleteTransactionParams } from "@/domain/usecases/delete-transaction";

export interface IDeleteTransactionRepository {
  delete: (params: DeleteTransactionParams) => Promise<void>;
}
