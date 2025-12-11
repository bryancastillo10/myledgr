import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "@/features/transaction/styles/list";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import useColor from "@/lib/providers/useColor";

import { BaseTransaction } from "@/features/transaction/api/interface";
import { formatStringRender, formatDate } from "@/features/user/utils";

const TransactionItem = ({ item }: { item: BaseTransaction }) => {
  const { COLORS } = useColor();
  const isIncome = item.category === "DEBIT";

  return (
    <View
      style={[
        styles.transactionCard,
        { backgroundColor: COLORS.card, shadowColor: COLORS.shadow },
      ]}
    >
      <TouchableOpacity style={styles.transactionContent}>
        <View style={styles.categoryIconContainer}>
          <Ionicons
            name={item.icon as keyof typeof IconType.glyphMap}
            size={22}
            color={isIncome ? COLORS.income : COLORS.expense}
          />
        </View>
        <View style={styles.transactionLeft}>
          <Text style={[styles.transactionTitle, { color: COLORS.text }]}>
            {item.title}
          </Text>
          <Text
            style={[styles.transactionCategory, { color: COLORS.textLight }]}
          >
            {formatStringRender(item.category)}
          </Text>
        </View>
        <View style={styles.transactionRight}>
          <Text
            style={[
              styles.transactionAmount,
              { color: isIncome ? COLORS.income : COLORS.expense },
            ]}
          >
            {isIncome ? "+" : "-"}${item.amount.toFixed(2)}
          </Text>
          <Text style={[styles.transactionDate, { color: COLORS.textLight }]}>
            {formatDate(item.createdAt)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionItem;
