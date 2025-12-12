import { View, FlatList, RefreshControl } from "react-native";

import { useState } from "react";

import { styles } from "@/features/transaction/styles/list";

import TransactionItem from "@/features/transaction/components/TransactionItem";
import NoTransactionsFound from "@/features/transaction/components/NoTransactionFound";
import { BaseTransaction } from "@/features/transaction/api/interface";

interface TransactionListProps {
  transactions: BaseTransaction[] | [];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = async () => {
    setRefreshing(true);

    setRefreshing(false);
  };

  return (
    <FlatList
      style={styles.transactionsList}
      contentContainerStyle={styles.transactionsListContent}
      data={transactions}
      renderItem={({ item }) => <TransactionItem item={item} />}
      ListEmptyComponent={<NoTransactionsFound />}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

export default TransactionList;
