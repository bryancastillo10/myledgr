import { View, Text } from "react-native";

import Modal from "@/components/ui/Modal";

import { useModalStore } from "@/lib/zustand/modal";

interface DeleteProfileModalProps {
  email: string;
}

const DeleteProfileModal = ({ email }: DeleteProfileModalProps) => {
  const { isOpen, modalType, setCloseModal } = useModalStore();

  const modalBody = (
    <View>
      <Text>{email}</Text>
    </View>
  );

  return (
    isOpen &&
    modalType === "delete_account" && (
      <Modal
        isOpen={isOpen}
        textHeader="Confirm Delete Account"
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

export default DeleteProfileModal;
