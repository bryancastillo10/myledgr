import { useState } from "react";
import { useRouter } from "expo-router";

import { transactionApi } from "@/features/transaction/api/request";

import { useToastStore } from "@/lib/zustand/toast";
import { useModalStore } from "@/lib/zustand/modal";
import { useTransactionStore } from "@/lib/zustand/transaction";

const useDeleteTransaction = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { fetchTransaction } = useTransactionStore();

  const router = useRouter();
  const { setCloseModal } = useModalStore();
  const { showToast } = useToastStore();

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      const res = await transactionApi.deleteTransaction(id);

      setCloseModal();

      if (res?.message) {
        router.back();
        fetchTransaction();
        showToast("Transaction has been deleted", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to delete the transaction", "error");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleConfirmDelete,
  };
};

export default useDeleteTransaction;
