import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";

import useGetTransactions from "@/features/transaction/hooks/useGetTransactions";

const TransactionItem = () => {
  const { id } = useLocalSearchParams();

  const { transactions, loading } = useGetTransactions();

  const transaction = transactions.find((item) => item.id === id);

  return (
    <ScreenWrapper>
      <ScreenHeader text="Transaction Details" />
      <View>
        <Text>ID: {transaction?.id}</Text>
        <Text>Amount: {transaction?.amount}</Text>
        <Text>Category: {transaction?.category}</Text>
      </View>
    </ScreenWrapper>
  );
};

export default TransactionItem;
