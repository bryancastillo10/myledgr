import { View, Text } from "react-native";
import { styles } from "@/features/transaction/styles/list";

const TransactionList = () => {
  return (
    <View style={styles.transactionsHeaderContainer}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
    </View>
  );
};

export default TransactionList;
