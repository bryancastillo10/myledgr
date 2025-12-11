import { View } from "react-native";

import { styles } from "@/assets/styles/home";

import HomePageHeader from "@/features/user/components/HomePageHeader";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import PingCircles from "@/components/static/PingCircle";

import {
  BalanceCard,
  TransactionHeader,
  TransactionList,
} from "@/features/transaction/components";

import useGetUser from "@/features/user/hooks/useGetUser";
import useGetTransactions from "@/features/transaction/hooks/useGetTransactions";
import useGetTransactionSummary from "@/features/transaction/hooks/useGetTransactionSummary";

export default function HomePage() {
  const { user } = useGetUser();

  const { transactions, loading } = useGetTransactions();
  const { summary, loading: summaryLoading } = useGetTransactionSummary();

  const TransactionLoading = (
    <View style={styles.loader}>
      <PingCircles size="xl" />
    </View>
  );

  return (
    <ScreenWrapper>
      <View style={styles.content}>
        {/* Header */}
        <HomePageHeader user={user} />

        {/* Balance Card UI */}
        <BalanceCard
          currency={user?.currency!}
          transactionSummary={summary}
          loading={summaryLoading}
        />

        {/* Transaction Lists */}
        <TransactionHeader />

        {loading ? (
          TransactionLoading
        ) : (
          <TransactionList transactions={transactions} />
        )}
      </View>
    </ScreenWrapper>
  );
}
