import { useState } from "react";

import { BaseTransaction } from "@/features/transaction/api/interface";
import { transactionApi } from "@/features/transaction/api/request";

import { useToastStore } from "@/lib/zustand/toast";
import { router, useRouter } from "expo-router";

type TransactionItem = Omit<BaseTransaction, "createdAt">;

const initialTransaction: TransactionItem = {
  title: "",
  amount: "",
  icon: "",
  category: "DEBIT",
};

const useCreateTransaction = () => {
  const [transactionData, setTransactionData] =
    useState<TransactionItem>(initialTransaction);
  const [loading, setLoading] = useState<boolean>(false);

  const { showToast } = useToastStore();

  const onChangeData =
    (key: keyof typeof initialTransaction) => (value: string) => {
      setTransactionData((prev) => ({
        ...prev,
        [key]: key === "amount" ? Number(value) || 0 : value,
      }));
    };

  const onSelectCategory = (value: "DEBIT" | "CREDIT") => {
    setTransactionData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = async () => {
    if (transactionData.amount === 0) {
      showToast("Amount is required", "default");
      return;
    }

    if (transactionData.title === "" || transactionData.icon === "") {
      showToast("Title and Category is required", "default");
      return;
    }

    try {
      setLoading(true);
      const res = await transactionApi.createTransaction(transactionData);

      if (res) {
        router.push("/(root)");
        showToast("Transaction added", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to add transaction", "error");
    } finally {
      setLoading(false);
    }
  };

  return {
    transactionData,
    loading,
    onChangeData,
    onSelectCategory,
    handleSubmit,
  };
};

export default useCreateTransaction;
