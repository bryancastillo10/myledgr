import { View, Text } from "react-native";

import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/styles/home";

export const BalanceCard = () => {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>20000</Text>

      <View style={styles.balanceStats}>
        <Text style={styles.balanceStatLabel}>Income</Text>
        <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
          1000
        </Text>
      </View>

      <View style={[styles.balanceStatItem, styles.statDivider]} />
      <View style={styles.balanceStatItem}>
        <Text style={styles.balanceStatLabel}>Expenses</Text>
        <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
          - 1000
        </Text>
      </View>
    </View>
  );
};
