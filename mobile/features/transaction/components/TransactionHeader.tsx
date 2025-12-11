import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useColor from "@/lib/providers/useColor";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TransactionHeader = () => {
  const { COLORS } = useColor();
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Text style={[styles.recentTransactionText, { color: COLORS.text }]}>
        Recent Transactions
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/(transaction)/create")}
        style={[styles.addButton, { backgroundColor: COLORS.primary }]}
      >
        <Ionicons name="add-circle" size={18} color={COLORS.white} />
        <Text style={[styles.addButtonText, { color: COLORS.white }]}>Add</Text>
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
    marginVertical: 12,
  },
  recentTransactionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  addButton: {
    flexDirection: "row",
    gap: 6,
    borderRadius: 14,
    padding: 8,
  },
  addButtonText: {
    fontWeight: "600",
    letterSpacing: 0.75,
  },
});
