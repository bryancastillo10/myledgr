import { View, Text } from "react-native";

import useColor from "@/lib/providers/useColor";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "@/features/transaction/styles/balanceCard";
import { getCurrencySymbol } from "@/features/transaction/utils/getCurrencySymbol";
import { TransactionSummary } from "@/features/transaction/api/interface";

import NoTransactionSummary from "@/features/transaction/components/NoTransactionSummary";
import BalanceCardSkeleton from "@/components/static/BalanceCardSkeleton";

interface BalanceCardProps {
  currency: string;
  transactionSummary: TransactionSummary<number> | undefined;
  loading: boolean;
}

const BalanceCard = ({
  currency = "USD",
  transactionSummary,
  loading,
}: BalanceCardProps) => {
  const { COLORS } = useColor();

  const symbol = getCurrencySymbol(currency);

  if (loading) {
    return <BalanceCardSkeleton />;
  }

  if (!transactionSummary) {
    return <NoTransactionSummary currencySymbol={symbol} />;
  }

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
        {symbol} 20,000
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
            + {symbol} 1,000
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
