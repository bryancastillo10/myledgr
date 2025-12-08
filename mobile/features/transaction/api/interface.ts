export interface BaseTransaction {
  title: string;
  amount: number;
  icon: string;
  category: "CREDIT" | "DEBIT";
}

export interface MutateTransactionResponse {
  message: string;
  transaction: {
    id: string;
    transactionOwner: string;
  };
}

export interface TransactionItem extends BaseTransaction {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionSummary<T> {
  debit: T;
  credit: T;
  balance: T;
}
