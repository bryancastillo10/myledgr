import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import { useModalStore } from "@/lib/zustand/modal";
import { User } from "@/lib/zustand/interface";

import { formatStringRender } from "@/features/user/utils";
import { themeOptions } from "@/constants/theme";

import useEditProfile from "@/features/user/hooks/useEditProfile";
import { currencyOptions } from "@/constants/currency";
import AnimatedLoadingScreen from "@/components/static/AnimatedLoadingScreen";

interface EditProfileModalProps {
  user: User;
}

const EditProfileModal = ({ user }: EditProfileModalProps) => {
  const { isOpen, modalType, setCloseModal } = useModalStore();
  const { updateData, loading, onChangeData, handleSubmit } =
    useEditProfile(user);

  const renderInputForm = () => {
    switch (modalType) {
      case "username":
        return (
          <Input
            value={updateData?.username!}
            onChange={onChangeData("username")}
          />
        );
      case "bio":
        return (
          <Input value={updateData?.bio!} onChange={onChangeData("bio")} />
        );
      case "location":
        return (
          <Input
            value={updateData?.address!}
            onChange={onChangeData("address")}
          />
        );
      case "theme":
        return (
          <Select
            options={themeOptions}
            label={updateData?.theme}
            value={updateData?.theme!}
            onChange={onChangeData("theme")}
          />
        );
      case "currency":
        return (
          <Select
            options={currencyOptions}
            label={updateData?.currency}
            value={updateData?.currency!}
            onChange={onChangeData("currency")}
          />
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <AnimatedLoadingScreen text="Updating..." />;
  }

  return (
    isOpen && (
      <Modal
        isOpen={isOpen}
        textHeader={`Edit ${formatStringRender(modalType!)}`}
        withHeader
        body={renderInputForm()}
        actionLeft={setCloseModal}
        actionRight={handleSubmit}
        actionRightLabel="Save"
        actionLeftLabel="Close"
      />
    )
  );
};

export default EditProfileModal;
