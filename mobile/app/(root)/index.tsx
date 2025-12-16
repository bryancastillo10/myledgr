import { View } from "react-native";
import { useEffect } from "react";
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
import { useTransactionStore } from "@/lib/zustand/transaction";
import useGetTransactionSummary from "@/features/transaction/hooks/useGetTransactionSummary";

export default function HomePage() {
  const { user } = useGetUser();

  const { transactions, fetchTransaction, loading } = useTransactionStore();
  const { summary, loading: summaryLoading } = useGetTransactionSummary();

  useEffect(() => {
    fetchTransaction();
  }, []);

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
