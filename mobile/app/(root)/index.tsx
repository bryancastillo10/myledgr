import { View, Text } from "react-native";

import { styles } from "@/assets/styles/home";
import { BalanceCard } from "@/features/transaction/components/BalanceCard";

import Button from "@/components/ui/Button";
import HomePageHeader from "@/features/user/components/HomePageHeader";

import useSignOut from "@/features/auth/hooks/useSignOut";

export default function HomePage() {
  const { handleSignOut } = useSignOut();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <HomePageHeader />

        {/* Balance Card UI */}
        <BalanceCard />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>

      <Button onPress={handleSignOut} textButton="Sign Out" />
      {/* List of Transactions */}
      {/* Flatlist */}
    </View>
  );
}
