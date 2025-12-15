import { useState, useCallback, useEffect } from "react";
import { transactionApi } from "@/features/transaction/api/request";

import { BaseTransaction } from "@/features/transaction/api/interface";

const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<BaseTransaction[] | []>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const fetchTransaction = useCallback(async () => {
    try {
      setLoading(true);

      const list = await transactionApi.getTransaction();

      if (list) {
        setTransactions(list);
      }
    } catch (err) {
      console.error("Failed to get the transaction lists");
    } finally {
      setLoading(false);
    }
  }, [setTransactions]);

  useEffect(() => {
    fetchTransaction();
  }, [fetchTransaction]);

  return {
    transactions,
    loading,
    refreshTransaction: fetchTransaction,
  };
};

export default useGetTransactions;
