import { View, Text, StyleSheet } from "react-native";

import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";

import { useModalStore } from "@/lib/zustand/modal";
import useDeleteProfile from "@/features/user/hooks/useDeleteProfile";
import useColor from "@/lib/providers/useColor";

interface DeleteProfileModalProps {
  email: string;
}

const DeleteProfileModal = ({ email }: DeleteProfileModalProps) => {
  const { COLORS } = useColor();
  const { isOpen, modalType, setCloseModal } = useModalStore();

  const { typedEmail, loading, onChangeEmail, handleSubmit } =
    useDeleteProfile();

  const modalBody = (
    <View style={styles.container}>
      <Text style={[styles.caption, { color: COLORS.text }]}>
        Are you sure you want to delete your account? To confirm deletion,
        please retype your email address.
      </Text>
      <Text style={[styles.emailText, { color: COLORS.primary }]}>{email}</Text>
      <Input
        placeholder="Type your email"
        value={typedEmail}
        onChange={onChangeEmail}
      />
    </View>
  );

  return (
    isOpen &&
    modalType === "delete_account" && (
      <Modal
        isOpen={isOpen}
        height="42%"
        textHeader="Confirm Delete Account"
        withHeader
        body={modalBody}
        loading={loading}
        actionLeft={setCloseModal}
        actionRight={handleSubmit}
        actionRightLabel="Delete"
        actionLeftLabel="Close"
      />
    )
  );
};

export default DeleteProfileModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  caption: {
    textAlign: "justify",
    fontSize: 16,
    marginVertical: 4,
  },
  emailText: {
    fontSize: 14,
    textAlign: "right",
    fontWeight: "600",
    letterSpacing: 0.6,
    marginBottom: 8,
  },
});
