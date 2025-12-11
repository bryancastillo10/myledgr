import { View, Text, StyleSheet } from "react-native";

import useColor from "@/lib/providers/useColor";
import { Ionicons } from "@expo/vector-icons";

const BalanceCard = () => {
  const { COLORS } = useColor();
  const currency = "$";

  return (
    <View
      style={[
        styles.balanceCard,
        {
          backgroundColor: COLORS.card,
          shadowColor: COLORS.shadow,
          borderColor: COLORS.border,
        },
      ]}
    >
      {/* Total Balance Header */}
      <Text style={[styles.balanceTitle, { color: COLORS.textLight }]}>
        Total Balance
      </Text>
      <Text style={[styles.balanceAmount, { color: COLORS.primary }]}>
        {currency} 20,000
      </Text>

      <View style={[styles.balanceStats, { borderTopColor: COLORS.border }]}>
        <View style={styles.balanceStatItem}>
          {/* Left Side */}
          <View style={styles.balanceSubtitle}>
            <View
              style={[styles.statBadge, { backgroundColor: COLORS.textLight }]}
            >
              <Ionicons
                name="arrow-up"
                size={20}
                style={[styles.statIcon, { color: COLORS.primary }]}
              />
            </View>
            <Text
              style={[styles.balanceStatLabel, { color: COLORS.textLight }]}
            >
              Income
            </Text>
          </View>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            + {currency} 1,000
          </Text>
        </View>

        <View
          style={[styles.statDivider, { backgroundColor: COLORS.border }]}
        />

        <View style={styles.balanceStatItem}>
          <View style={styles.balanceSubtitle}>
            <View
              style={[styles.statBadge, { backgroundColor: COLORS.textLight }]}
            >
              <Ionicons
                name="arrow-down"
                size={20}
                style={[styles.statIcon, { color: COLORS.primary }]}
              />
            </View>
            <Text
              style={[styles.balanceStatLabel, { color: COLORS.textLight }]}
            >
              Expenses
            </Text>
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
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
  },
  balanceTitle: {
    fontSize: 14,
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
    marginBottom: 28,
    letterSpacing: -1,
  },
  balanceStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    borderTopWidth: 1,
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
    marginBottom: 8,
  },
  statIcon: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statDivider: {
    width: 1,

    marginHorizontal: 16,
  },
  balanceStatLabel: {
    fontSize: 13,
    marginBottom: 6,
    fontWeight: "500",
  },
  balanceStatAmount: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
});
