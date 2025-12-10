import { View, Text } from "react-native";

import { styles } from "@/assets/styles/home";

import HomePageHeader from "@/features/user/components/HomePageHeader";

import {
  BalanceCard,
  TransactionHeader,
  TransactionList,
} from "@/features/transaction/components";

import useGetUser from "@/features/user/hooks/useGetUser";
import useGetTransactions from "@/features/transaction/hooks/useGetTransactions";

export default function HomePage() {
  const { user } = useGetUser();

  const { transactions, loading } = useGetTransactions();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <HomePageHeader user={user} />

        {/* Balance Card UI */}
        <BalanceCard />

        {/* Transaction Lists */}
        <TransactionHeader />
        <TransactionList loading={loading} transactions={transactions} />
      </View>
    </View>
  );
}
