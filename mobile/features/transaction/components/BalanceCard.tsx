import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const BalanceCard = () => {
  const currency = "$";

  return (
    <View style={styles.balanceCard}>
      {/* Total Balance Header */}
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>{currency} 20,000</Text>

      <View style={styles.balanceStats}>
        <View style={styles.balanceStatItem}>
          {/* Left Side */}
          <View style={styles.balanceSubtitle}>
            <View style={styles.statBadge}>
              <Ionicons name="arrow-up" size={20} style={styles.statIcon} />
            </View>
            <Text style={styles.balanceStatLabel}>Income</Text>
          </View>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            + {currency} 1,000
          </Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.balanceStatItem}>
          <View style={styles.balanceSubtitle}>
            <View style={styles.statBadge}>
              <Ionicons
                name="arrow-down"
                size={20}
                style={[styles.statIcon, { color: COLORS.white }]}
              />
            </View>
            <Text style={styles.balanceStatLabel}>Expenses</Text>
          </View>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            - {currency} 1,000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  balanceTitle: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 8,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  balanceSubtitle: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 28,
    letterSpacing: -1,
  },
  balanceStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  balanceStatItem: {
    flex: 1,
    alignItems: "center",
  },
  statBadge: {
    width: 28,
    height: 28,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.textLight,
    marginBottom: 8,
  },
  statIcon: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: 16,
  },
  balanceStatLabel: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 6,
    fontWeight: "500",
  },
  balanceStatAmount: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
});
