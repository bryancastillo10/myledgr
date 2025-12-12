import { useState, useEffect } from "react";
import { User } from "@/lib/zustand/interface";

import { userApi } from "@/features/user/api/request";

type ModalField = "username" | "bio" | "location" | "theme" | "currency";

const useEditProfile = (user: User, modalType: ModalField | null) => {
  const [updateData, setUpdateData] = useState<Partial<User>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUpdateData(user);
    }
  }, [user]);

  const onChangeData = (value: string) => {
    if (!modalType) return;

    setUpdateData((prev) => ({
      ...prev,
      [modalType]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(false);

      const payload = {
        [modalType as string]: updateData[modalType as keyof typeof updateData],
      };

      const res = await userApi.updateUser(payload);
      if (res) {
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(true);
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
