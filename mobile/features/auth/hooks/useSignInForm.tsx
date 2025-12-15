import { useState } from "react";
import { useRouter } from "expo-router";

import { authApi } from "@/features/auth/api/request";
import { userApi } from "@/features/user/api/request";

import { useAuthStore } from "@/lib/zustand/user";
import { useToastStore } from "@/lib/zustand/toast";

const initialSignIn = {
  email: "",
  password: "",
};

const useSignInForm = () => {
  const [signInData, setSignInData] = useState(initialSignIn);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { setUser } = useAuthStore();
  const { showToast } = useToastStore();

  const onChangeData = (key: keyof typeof initialSignIn) => (value: string) => {
    setSignInData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (signInData.email === "" || signInData.password === "") {
      showToast("Email and password requrired to be filled up", "default");
      return;
    }

    try {
      setLoading(true);

      const res = await authApi.signIn(signInData);
      const currUser = await userApi.getUser();

      if (currUser) {
        setUser(currUser);
      }

      if (res && res.user) {
        router.push("/(root)");
        showToast("Welcome to MyLedgr", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to sign in", "error");
    } finally {
      setLoading(false);
    }
  };

  return {
    signInData,
    loading,
    onChangeData,
    handleSubmit,
  };
};

export default useSignInForm;
