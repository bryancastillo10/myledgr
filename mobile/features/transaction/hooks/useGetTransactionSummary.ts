import { useState, useEffect } from "react";
import { transactionApi } from "@/features/transaction/api/request";

import { TransactionSummary } from "@/features/transaction/api/interface";

const useGetTransactionSummary = () => {
  const [summary, setSummary] = useState<TransactionSummary<number>>();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTransactionSummary = async () => {
      try {
        setLoading(true);

        const transactionSummary = await transactionApi.getTransactionSummary();

        if (transactionSummary) {
          setSummary(transactionSummary);
        }
      } catch (err) {
        console.error("Failed to get the transaction summary");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionSummary();
  }, [setSummary]);

  return {
    summary,
    loading,
  };
};

export default useGetTransactionSummary;
