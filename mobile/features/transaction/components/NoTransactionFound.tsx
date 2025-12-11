import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "@/features/transaction/styles/notransaction";
import useColor from "@/lib/providers/useColor";

const NoTransactionsFound = () => {
  const { COLORS } = useColor();
  const router = useRouter();

  return (
    <View
      style={[
        styles.emptyState,
        { backgroundColor: COLORS.card, shadowColor: COLORS.shadow },
      ]}
    >
      <Ionicons
        name="receipt-outline"
        size={60}
        color={COLORS.textLight}
        style={styles.emptyStateIcon}
      />
      <Text style={[styles.emptyStateTitle, { color: COLORS.text }]}>
        No transactions yet
      </Text>
      <Text style={[styles.emptyStateText, { color: COLORS.textLight }]}>
        Start tracking your finances by adding your first transaction
      </Text>
      <TouchableOpacity
        style={[styles.emptyStateButton, { backgroundColor: COLORS.primary }]}
        onPress={() => router.push("/create")}
      >
        <Ionicons name="add-circle" size={18} color={COLORS.white} />
        <Text style={[styles.emptyStateButtonText, { color: COLORS.white }]}>
          Add Transaction
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default NoTransactionsFound;
