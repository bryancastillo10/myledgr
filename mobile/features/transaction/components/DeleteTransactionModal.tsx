import { View, Text, StyleSheet } from "react-native";

import Modal from "@/components/ui/Modal";

import { useModalStore } from "@/lib/zustand/modal";
import useDeleteProfile from "@/features/user/hooks/useDeleteProfile";
import useColor from "@/lib/providers/useColor";

import { getCurrencySymbol } from "@/features/transaction/utils/getCurrencySymbol";

import { DeleteTransactionModalProps } from "@/features/transaction/utils/deleteTransaction.type";

const DeleteTransactionModal = ({
  id,
  title,
  currency,
  amount,
}: DeleteTransactionModalProps) => {
  const { COLORS } = useColor();
  const { isOpen, modalType, setCloseModal } = useModalStore();

  const modalBody = (
    <View style={styles.container}>
      <Text style={[styles.caption, { color: COLORS.text }]}>
        Are you sure you want to delete this transaction?
      </Text>
      <View style={styles.transactionInfo}>
        <Text style={[styles.title, { color: COLORS.primary }]}>{title}</Text>
        <Text style={[styles.amount, { color: COLORS.text }]}>
          {getCurrencySymbol(currency)} {amount}
        </Text>
      </View>
    </View>
  );
  return (
    isOpen &&
    modalType === "delete_transaction" && (
      <Modal
        isOpen={isOpen}
        textHeader="Confirm Delete Transaction"
        withHeader
        body={modalBody}
        actionLeft={setCloseModal}
        actionRight={setCloseModal}
        actionRightLabel="Delete"
        actionLeftLabel="Close"
      />
    )
  );
};

export default DeleteTransactionModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  caption: {
    textAlign: "justify",
    fontSize: 16,
    marginVertical: 4,
  },
  transactionInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  amount: {
    fontSize: 18,
  },
});
