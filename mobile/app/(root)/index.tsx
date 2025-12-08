import { View, Text } from "react-native";

import { styles } from "@/assets/styles/home";

import HomePageHeader from "@/features/user/components/HomePageHeader";

import {
  BalanceCard,
  TransactionHeader,
  TransactionList,
} from "@/features/transaction/components";

import useGetUser from "@/features/user/hooks/useGetUser";

export default function HomePage() {
  const { user } = useGetUser();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <HomePageHeader user={user} />

        {/* Balance Card UI */}
        <BalanceCard />

        {/* Transaction Lists */}
        <TransactionHeader />
        <TransactionList />
      </View>
    </View>
  );
}
