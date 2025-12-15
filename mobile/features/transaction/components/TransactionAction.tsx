import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useModalStore } from "@/lib/zustand/modal";
import useColor from "@/lib/providers/useColor";

import DeleteTransactionModal from "@/features/transaction/components/DeleteTransactionModal";
import { DeleteTransactionModalProps } from "@/features/transaction/utils/deleteTransaction.type";

const TransactionAction = ({
  id,
  title,
  currency,
  amount,
}: DeleteTransactionModalProps) => {
  const { COLORS } = useColor();

  const { setOpenModal } = useModalStore();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          {
            backgroundColor: COLORS.primary + "90",
            borderColor: COLORS.primary,
            shadowColor: COLORS.shadow,
          },
        ]}
        onPress={() => router.push("/(transaction)/edit")}
      >
        <Ionicons style={[{ color: COLORS.white }]} name="pencil" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          {
            backgroundColor: COLORS.primary + "90",
            borderColor: COLORS.primary,
            shadowColor: COLORS.shadow,
          },
        ]}
        onPress={() => setOpenModal("delete_transaction")}
      >
        <Ionicons style={[{ color: COLORS.white }]} name="trash" size={24} />
      </TouchableOpacity>
      <DeleteTransactionModal
        id={id}
        title={title}
        currency={currency}
        amount={amount}
      />
    </View>
  );
};

export default TransactionAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 20,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 28,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    borderWidth: 1,
  },
});
