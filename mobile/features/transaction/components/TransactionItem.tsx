import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "@/features/transaction/styles/list";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

import { BaseTransaction } from "@/features/transaction/api/interface";
import { formatStringRender, formatDate } from "@/features/user/utils";

const TransactionItem = ({ item }: { item: BaseTransaction }) => {
  const isIncome = item.category === "DEBIT";

  return (
    <View style={styles.transactionCard}>
      <TouchableOpacity style={styles.transactionContent}>
        <View style={styles.categoryIconContainer}>
          <Ionicons
            name={item.icon as keyof typeof IconType.glyphMap}
            size={22}
            color={isIncome ? COLORS.income : COLORS.expense}
          />
        </View>
        <View style={styles.transactionLeft}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionCategory}>
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
          <Text style={styles.transactionDate}>
            {formatDate(item.createdAt)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionItem;
