import { View, Text } from "react-native";

import useColor from "@/lib/providers/useColor";
import { styles } from "@/features/transaction/styles/balanceCard";

const NoTransactionSummary = ({
  currencySymbol,
}: {
  currencySymbol: string;
}) => {
  const { COLORS } = useColor();

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
      <Text style={[styles.balanceTitle, { color: COLORS.textLight }]}>
        Total Balance
      </Text>
      <Text style={[styles.balanceAmount, { color: COLORS.primary }]}>
        {currencySymbol} 0.00
      </Text>
      <View style={[styles.balanceStats, { borderTopColor: COLORS.border }]} />
      <Text style={{ textAlign: "center", color: COLORS.textLight }}>
        No transactions yet
      </Text>
    </View>
  );
};

export default NoTransactionSummary;
