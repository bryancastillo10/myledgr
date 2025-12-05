import { View, Text } from "react-native";

import { styles } from "@/assets/styles/home";
import { BalanceCard } from "@/features/transaction/components/BalanceCard";

import Button from "@/components/ui/Button";
import { authApi } from "@/features/auth/api/request";
import { useAuthStore } from "@/lib/zustand/user";
import { useRouter } from "expo-router";
import HomePageHeader from "@/features/user/components/HomePageHeader";

export default function HomePage() {
  const { clearUser } = useAuthStore();
  const router = useRouter();

  const handleSignOut = async () => {
    await authApi.signOut();

    clearUser();

    router.push("/welcome");
  };

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
