import { useState } from "react";

const initialSignIn = {
  email: "",
  password: "",
};

const useSignInForm = () => {
  const [signInData, setSignInData] = useState(initialSignIn);
  const [error, setError] = useState<string>("");

  const onChangeData = (key: keyof typeof initialSignIn) => (value: string) => {
    setSignInData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCloseErrror = () => {
    setError("");
  };

  const handleSubmit = () => {
    if (signInData.email == "" || signInData.password == "") {
      setError("Email and password are required");
      return;
    }

    // API call for sign in endpoint
  };

  return {
    signInData,
    error,
    onChangeData,
    handleCloseErrror,
    handleSubmit,
  };
};

export default useSignInForm;
