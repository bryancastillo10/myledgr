import { View, Text } from "react-native";

import { styles } from "@/assets/styles/home";
import { BalanceCard } from "@/features/transaction/components/BalanceCard";

import HomePageHeader from "@/features/user/components/HomePageHeader";

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

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>
      {/* List of Transactions */}
      {/* Flatlist */}
    </View>
  );
}
