import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";

import useGetTransactions from "@/features/transaction/hooks/useGetTransactions";
import { useAuthStore } from "@/lib/zustand/user";
import useColor from "@/lib/providers/useColor";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import { getCurrencySymbol } from "@/features/transaction/utils/getCurrencySymbol";
import { formatDate, formatStringRender } from "@/features/user/utils";
import {
  styles,
  rowStyles,
} from "@/features/transaction/styles/transactionItem";

import {
  NoTransactionsFound,
  TransactionAction,
} from "@/features/transaction/components";
import AnimatedLoadingScreen from "@/components/static/AnimatedLoadingScreen";

interface DetailRowProps {
  label: string;
  value: string;
  iconName: keyof typeof IconType.glyphMap;
}

const DetailRow = ({ label, value, iconName }: DetailRowProps) => {
  const { COLORS } = useColor();
  return (
    <View style={rowStyles.row}>
      <Ionicons
        name={iconName}
        size={20}
        color={COLORS.text}
        style={rowStyles.icon}
      />
      <View style={rowStyles.textContainer}>
        <Text style={[rowStyles.label, { color: COLORS.text }]}>{label}</Text>
        <Text style={[rowStyles.value, { color: COLORS.primary }]}>
          {value}
        </Text>
      </View>
    </View>
  );
};

const TransactionItem = () => {
  const { id } = useLocalSearchParams();
  const { user } = useAuthStore();
  const { COLORS } = useColor();

  const { transactions, loading } = useGetTransactions();

  const symbol = getCurrencySymbol(user?.currency || "USD");
  const transaction = transactions.find((item) => item.id === id);
  const categoryIcon = transaction?.icon as keyof typeof IconType.glyphMap;
  if (loading) {
    return <AnimatedLoadingScreen text="Getting Transaction" />;
  }

  if (!transaction)
    return (
      <ScreenWrapper>
        <ScreenHeader text="Transaction Details" />
        <NoTransactionsFound />
      </ScreenWrapper>
    );

  const isIncome = transaction.category === "DEBIT";
  const amount = Number(transaction?.amount) || 0.0;

  return (
    <ScreenWrapper>
      <ScreenHeader text="Transaction Details" />
      <TransactionAction />
      <View style={styles.container}>
        <View style={[styles.headerCard, { backgroundColor: COLORS.white }]}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: isIncome ? COLORS.income : COLORS.expense },
            ]}
          >
            <Ionicons name={categoryIcon} size={32} color={COLORS.white} />
          </View>
          <Text
            style={[
              styles.titleText,
              { color: isIncome ? COLORS.income : COLORS.expense },
            ]}
          >
            {transaction.title}
          </Text>
          <Text
            style={[
              styles.amountText,
              { color: isIncome ? COLORS.income : COLORS.expense },
            ]}
          >
            {symbol} &nbsp;
            {amount.toFixed(2)}
          </Text>
        </View>

        <View style={[styles.detailSection, { backgroundColor: COLORS.white }]}>
          <DetailRow
            label="Transaction Type"
            value={formatStringRender(transaction.category)}
            iconName="list"
          />
          <DetailRow
            label="Transaction Date"
            value={formatDate(transaction.createdAt)}
            iconName="time"
          />
          <DetailRow
            label="Date Updated"
            value={formatDate(transaction.updatedAt)}
            iconName="calendar"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TransactionItem;
