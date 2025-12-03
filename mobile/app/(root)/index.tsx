import { View, TouchableOpacity, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/assets/styles/home";
import { BalanceCard } from "@/components/ui/BalanceCard";

import Button from "@/components/ui/Button";
import { authApi } from "@/features/auth/api/request";
import { useAuthStore } from "@/lib/zustand/user";
import { useRouter } from "expo-router";

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
        <View style={styles.header}>
          {/* Left Side */}
          <View style={styles.headerLeft}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.usernameText}>Email Address</Text>
            </View>
          </View>

          {/* Right Side */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => {}}>
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>

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
