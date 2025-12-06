import { View, FlatList, RefreshControl } from "react-native";

import { useState } from "react";

import { styles } from "@/features/transaction/styles/list";

import TransactionItem from "@/features/transaction/components/TransactionItem";
import NoTransactionsFound from "@/features/transaction/components/NoTransactionFound";
const TransactionList = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = async () => {
    setRefreshing(true);

    setRefreshing(false);
  };

  return (
    <View style={styles.transactionsHeaderContainer}>
      {/* <View>
        <Text>No Transactions Available</Text>
      </View> */}

      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={null}
        renderItem={({ item }) => <TransactionItem />}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default TransactionList;
