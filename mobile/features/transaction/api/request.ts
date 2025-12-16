import { apiRequest } from "@/lib/api-client/client";
import {
  BaseTransaction,
  MutateTransactionResponse,
  TransactionItem,
  TransactionSummary,
} from "@/features/transaction/api/interface";

export const transactionApi = {
  createTransaction: (body: Omit<BaseTransaction, "createdAt" | "updatedAt">) =>
    apiRequest<MutateTransactionResponse>("/transaction", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  getTransaction: () =>
    apiRequest<TransactionItem[]>("/transaction", {
      method: "GET",
    }),
  getTransactionSummary: () =>
    apiRequest<TransactionSummary<number>>("/transaction/summary", {
      method: "GET",
    }),
  updateTransaction: (
    body: Omit<BaseTransaction, "createdAt" | "updatedAt">,
    id: string
  ) =>
    apiRequest<MutateTransactionResponse>(`/transaction/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  deleteTransaction: (id: string) =>
    apiRequest<{ message: string }>(`/transaction/${id}`, {
      method: "DELETE",
    }),
};
