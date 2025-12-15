import { useState } from "react";
import { User } from "@/lib/zustand/interface";

import { userApi } from "@/features/user/api/request";
import useGetUser from "@/features/user/hooks/useGetUser";

import { useToastStore } from "@/lib/zustand/toast";
import { useModalStore } from "@/lib/zustand/modal";

const useEditProfile = (user: User) => {
  const [updateData, setUpdateData] = useState<Partial<User>>(user);
  const [loading, setLoading] = useState(false);

  const { setCloseModal } = useModalStore();
  const { showToast } = useToastStore();
  const { refreshUser } = useGetUser();

  const onChangeData = (key: keyof User) => (value: string) => {
    setUpdateData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(false);

      const res = await userApi.updateUser(updateData);

      if (res) {
        refreshUser();
        showToast("Your profile has been updated", "success");
      }

      setCloseModal();
    } catch (err) {
      console.error(err);
      showToast("Failed to update user profile", "error");
    } finally {
      setLoading(false);
    }
  };

  return {
    updateData,
    loading,
    onChangeData,
    handleSubmit,
  };
};

export default useEditProfile;
