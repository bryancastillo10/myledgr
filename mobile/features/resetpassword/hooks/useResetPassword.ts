import { useState } from "react";
import { useRouter } from "expo-router";

import { resetPasswordApi } from "@/features/resetpassword/api/request";
import { useResetPasswordContext } from "@/features/resetpassword/context/resetPasswordStep";
import {
  UpdatePasswordRequest,
  VerifyCodeRequest,
} from "@/features/resetpassword/api/interface";

import { useToastStore } from "@/lib/zustand/toast";
import { useAuthStore } from "@/lib/zustand/user";

const useResetPassword = () => {
  const { goForward } = useResetPasswordContext();
  const { showToast } = useToastStore();
  const { user } = useAuthStore();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const handleResetRequest = async (email: string) => {
    if (email === "") {
      showToast("Email is required", "default");
      return;
    }

    try {
      setLoading(true);

      const res = await resetPasswordApi.requestReset({ email });

      if (res) {
        goForward();
        showToast("Verification code sent", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to request email", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (req: VerifyCodeRequest) => {
    try {
      setLoading(true);

      const res = await resetPasswordApi.verifyCode(req);

      if (res) {
        goForward();
        showToast("Code verificastion is complete", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed verification", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitUpdate = async (updateData: UpdatePasswordRequest) => {
    if (updateData.password === "" || updateData.confirmPassword === "") {
      showToast("Please fill up both passwords", "default");
      return;
    }

    try {
      setLoading(true);

      const res = await resetPasswordApi.updatePassword(updateData);

      if (res) {
        if (user) {
          router.push("/(profile)/view");
        } else {
          router.push("/");
        }
        showToast("Password is updated", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed verification", "error");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleResetRequest,
    handleVerifyCode,
    handleSubmitUpdate,
    loading,
  };
};

export default useResetPassword;
