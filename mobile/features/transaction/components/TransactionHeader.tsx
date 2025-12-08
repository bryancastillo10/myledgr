import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/colors";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TransactionHeader = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Text style={styles.recentTransactionText}>Recent Transactions</Text>

      <TouchableOpacity
        onPress={() => router.push("/(transaction)/create")}
        style={styles.addButton}
      >
        <Ionicons name="add-circle" size={18} color={COLORS.white} />
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6,
  },
  recentTransactionText: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.text,
  },
  addButton: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 8,
  },
  addButtonText: {
    fontWeight: "600",
    letterSpacing: 0.75,
    color: COLORS.white,
  },
});
