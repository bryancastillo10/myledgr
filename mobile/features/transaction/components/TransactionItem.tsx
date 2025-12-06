import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "@/features/transaction/styles/list";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

const TransactionItem = () => {
  const amount = 200.2;

  const isIncome = amount > 0;

  return (
    <View style={styles.transactionCard}>
      <TouchableOpacity style={styles.transactionContent}>
        <View style={styles.categoryIconContainer}>
          <Ionicons
            name="cash"
            size={22}
            color={isIncome ? COLORS.income : COLORS.expense}
          />
        </View>
        <View style={styles.transactionLeft}>
          <Text style={styles.transactionTitle}>Sample Title</Text>
          <Text style={styles.transactionCategory}>DEBIT</Text>
        </View>
        <View style={styles.transactionRight}>
          <Text
            style={[
              styles.transactionAmount,
              { color: isIncome ? COLORS.income : COLORS.expense },
            ]}
          >
            {isIncome ? "+" : "-"}${Math.abs(amount).toFixed(2)}
          </Text>
          <Text style={styles.transactionDate}>Date Here</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionItem;
