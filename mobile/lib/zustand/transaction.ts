import { create } from "zustand";

import { transactionApi } from "@/features/transaction/api/request";
import { TransactionState } from "@/lib/zustand/interface";

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: [],
  loading: false,
  fetchTransaction: async () => {
    set({ loading: true });
    try {
      const list = await transactionApi.getTransaction();

      if (list) {
        set({
          transactions: list,
          loading: false,
        });
      }
    } catch (err) {
      console.error("Failed to get the transaction list", err);
    } finally {
      set({ loading: false });
    }
  },
}));
