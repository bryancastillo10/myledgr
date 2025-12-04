import { useState } from "react";
import { authApi } from "@/features/auth/api/request";
import { router } from "expo-router";

const initialSignUp = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const useSignUpForm = () => {
  const [signUpData, setSignUpData] = useState(initialSignUp);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onChangeData = (key: keyof typeof initialSignUp) => (value: string) => {
    setSignUpData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCloseError = () => {
    setError("");
  };

  const handleSubmit = async () => {
    if (
      signUpData.username == "" ||
      signUpData.email == "" ||
      signUpData.password == "" ||
      signUpData.confirmPassword == ""
    ) {
      setError("Please fill up all the fields for sign up");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await authApi.signUp(signUpData);

      if (res && res.user) {
        router.push("/(root)");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    signUpData,
    error,
    loading,
    onChangeData,
    handleCloseError,
    handleSubmit,
  };
};

export default useSignUpForm;
