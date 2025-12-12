import { useState, useEffect } from "react";
import { transactionApi } from "@/features/transaction/api/request";

import { BaseTransaction } from "@/features/transaction/api/interface";

const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<BaseTransaction[] | []>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const fetchTransaction = async () => {
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
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return {
    transactions,
    loading,
    refetch: fetchTransaction,
  };
};

export default useGetTransactions;
