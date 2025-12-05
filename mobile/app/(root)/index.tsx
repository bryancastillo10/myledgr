import { View } from "react-native";

import { styles } from "@/assets/styles/home";
import { BalanceCard } from "@/features/transaction/components/BalanceCard";
import HomePageHeader from "@/features/user/components/HomePageHeader";
import TransactionList from "@/features/transaction/components/TransactionList";

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
        <TransactionList />
      </View>
    </View>
  );
}
