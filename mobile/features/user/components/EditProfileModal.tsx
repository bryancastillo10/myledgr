import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";

import { useModalStore } from "@/lib/zustand/modal";
import { User } from "@/lib/zustand/interface";

import { formatStringRender } from "@/features/user/utils";

interface EditProfileModalProps {
  user: User;
}

const EditProfileModal = ({ user }: EditProfileModalProps) => {
  const { isOpen, modalType, setCloseModal } = useModalStore();

  const renderInputForm = () => {
    switch (modalType) {
      case "username":
        return <Input value={user.username} onChange={() => {}} />;
      case "bio":
        return <Input value={user?.bio!} onChange={() => {}} />;
      case "location":
        return <Input value={user?.address!} onChange={() => {}} />;
      case "theme":
        return <Input value={user.theme} onChange={() => {}} />;
      case "currency":
        return <Input value={user.currency} onChange={() => {}} />;
      default:
        return null;
    }
  };

  return (
    isOpen && (
      <Modal
        isOpen={isOpen}
        textHeader={`Edit ${formatStringRender(modalType!)}`}
        withHeader
        body={renderInputForm()}
        actionLeft={setCloseModal}
        actionRight={setCloseModal}
        actionRightLabel="Save"
        actionLeftLabel="Close"
      />
    )
  );
};

export default EditProfileModal;
