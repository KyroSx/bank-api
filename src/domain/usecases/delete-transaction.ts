export type DeleteTransactionParams = {
  transaction_id: string;
};

export interface IDeleteTransaction {
  delete: (params: DeleteTransactionParams) => Promise<void>;
}
