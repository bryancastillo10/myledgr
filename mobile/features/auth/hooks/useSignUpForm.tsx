import { useState } from "react";

const initialSignUp = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const useSignUpForm = () => {
  const [signUpData, setSignUpData] = useState(initialSignUp);
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

  const handleSubmit = () => {
    if (
      signUpData.username == "" ||
      signUpData.email == "" ||
      signUpData.password == "" ||
      signUpData.confirmPassword == ""
    ) {
      setError("Please fill up all the fields for sign up");
      return;
    }
  };

  // API call for sign up endpoint

  return {
    signUpData,
    error,
    onChangeData,
    handleCloseError,
    handleSubmit,
  };
};

export default useSignUpForm;
