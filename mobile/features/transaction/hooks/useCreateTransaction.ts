import { useState } from "react";

import { BaseTransaction } from "@/features/transaction/api/interface";
import { transactionApi } from "@/features/transaction/api/request";

type TransactionItem = Omit<BaseTransaction, "createdAt">;

const initialTransaction: TransactionItem = {
  title: "",
  amount: null,
  icon: "",
  category: "DEBIT",
};

const useCreateTransaction = () => {
  const [transactionData, setTransactionData] =
    useState<TransactionItem>(initialTransaction);

  const onChangeData =
    (key: keyof typeof initialTransaction) => (value: string) => {
      setTransactionData((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  const handleSubmit = async () => {};

  return {
    transactionData,
    onChangeData,
    handleSubmit,
  };
};

export default useCreateTransaction;
