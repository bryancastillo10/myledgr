import { useState } from "react";
import { useRouter } from "expo-router";

import { authApi } from "@/features/auth/api/request";

const initialSignIn = {
  email: "",
  password: "",
};

const useSignInForm = () => {
  const [signInData, setSignInData] = useState(initialSignIn);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const onChangeData = (key: keyof typeof initialSignIn) => (value: string) => {
    setSignInData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCloseErrror = () => {
    setError("");
  };

  const handleSubmit = async () => {
    if (signInData.email == "" || signInData.password == "") {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await authApi.signIn(signInData);

      if (res && res.user) {
        router.push("/(root)");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    signInData,
    error,
    loading,
    onChangeData,
    handleCloseErrror,
    handleSubmit,
  };
};

export default useSignInForm;
