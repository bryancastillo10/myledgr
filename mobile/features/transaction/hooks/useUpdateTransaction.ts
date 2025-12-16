import { useState } from "react";

import { useTransactionStore } from "@/lib/zustand/transaction";
import { BaseTransaction } from "@/features/transaction/api/interface";

import { transactionApi } from "@/features/transaction/api/request";
import { useToastStore } from "@/lib/zustand/toast";
import { router } from "expo-router";

type UpdateTransaction = Omit<BaseTransaction, "createdAt" | "updatedAt">;

const useUpdateTransaction = (id: string) => {
  const { transactions } = useTransactionStore();
  const { showToast } = useToastStore();

  const transaction = transactions.find((item) => item.id === id);
  if (!transaction) return null;

  const [updateData, setUpdateData] = useState<UpdateTransaction>(transaction);
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeData = (key: keyof BaseTransaction) => (value: string) => {
    setUpdateData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSelectCategory = (value: "DEBIT" | "CREDIT") => {
    setUpdateData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const updatePayload = {
    title: updateData.title,
    amount: Number(updateData.amount),
    icon: updateData.icon,
    category: updateData.category,
  };

  const handleSubmit = async () => {
    if (updateData.amount === 0) {
      showToast("Amount is required", "default");
      return;
    }

    if (updateData.title === "" || updateData.icon === "") {
      showToast("Title and Category is required", "default");
      return;
    }
    try {
      setLoading(true);
      const res = await transactionApi.updateTransaction(updatePayload, id);

      if (res) {
        router.push("/(root)");
        showToast("A tansaction has been updated", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to update the transaction", "error");
    } finally {
      setLoading(false);
    }
  };
  return {
    updateData,
    loading,
    onChangeData,
    onSelectCategory,
    handleSubmit,
  };
};

export default useUpdateTransaction;
