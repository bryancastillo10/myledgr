import { useState } from "react";
import { useRouter } from "expo-router";

import { userApi } from "@/features/user/api/request";

import { useToastStore } from "@/lib/zustand/toast";
import { useModalStore } from "@/lib/zustand/modal";

const useDeleteProfile = () => {
  const [typedEmail, setTypedEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { setCloseModal } = useModalStore();
  const { showToast } = useToastStore();

  const onChangeEmail = (text: string) => {
    setTypedEmail(text);
  };

  const handleSubmit = async () => {
    if (typedEmail === "") {
      showToast("Enter your email to confirm deletion", "default");
    }

    try {
      setLoading(true);

      const res = await userApi.deleteUser(typedEmail);

      setCloseModal();

      if (res?.message) {
        router.push("/welcome");
        showToast("Your account has been deleted", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to delete account", "error");
    } finally {
      setLoading(false);
    }
  };

  return {
    typedEmail,
    loading,
    onChangeEmail,
    handleSubmit,
  };
};

export default useDeleteProfile;
