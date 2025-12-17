import { createContext, useContext, useState } from "react";
import { UpdatePasswordRequest } from "@/features/resetpassword/api/interface";
import { router } from "expo-router";

export enum Steps {
  RequestReset = 1,
  VerifyCode,
  Update,
}

interface ResetPasswordContext {
  step: Steps;
  email: string;
  code: string;
  updatePassword: UpdatePasswordRequest;
  onEmailChange: (text: string) => void;
  onCodeChange: (text: string) => void;
  onUpdatePasswordChange: (
    field: keyof UpdatePasswordRequest,
    text: string
  ) => void;
  goBack: () => void;
  goForward: () => void;
}

const ResetPasswordContext = createContext<ResetPasswordContext | undefined>(
  undefined
);

const initialUpdatePassword: UpdatePasswordRequest = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const ResetPasswordProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState<Steps>(Steps.RequestReset);
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [updatePassword, setUpdatePassword] = useState(initialUpdatePassword);

  //   UI Steps
  const goBack = () => {
    if (step > Steps.RequestReset) {
      setStep((prev) => prev - 1);
    } else {
      router.push("/(profile)/view");
    }
  };

  const goForward = () => {
    if (step < Steps.Update) {
      setStep((prev) => prev + 1);
    } else {
      return null;
    }
  };

  // OnChange functions
  const onEmailChange = (text: string) => {
    setEmail(text);
  };

  const onCodeChange = (text: string) => {
    setCode(text);
  };

  const onUpdatePasswordChange = (
    field: keyof UpdatePasswordRequest,
    text: string
  ) => {
    setUpdatePassword((prev) => ({
      ...prev,
      [field]: text,
    }));
  };

  const contexts = {
    step,
    email,
    code,
    updatePassword,
    onEmailChange,
    onCodeChange,
    onUpdatePasswordChange,
    goBack,
    goForward,
  };
  return (
    <ResetPasswordContext.Provider value={contexts}>
      {children}
    </ResetPasswordContext.Provider>
  );
};

export const useResetPasswordContext = () => {
  const context = useContext(ResetPasswordContext);
  if (context === undefined) {
    throw new Error(
      "Reset Password feature must be used within ResetPasswordContextProvider"
    );
  }
  return context;
};
