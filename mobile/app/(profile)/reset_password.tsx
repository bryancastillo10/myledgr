import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";

import { ResetPasswordProvider } from "@/features/resetpassword/context/resetPasswordStep";
import ResetPasswordForm from "@/features/resetpassword/components/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <ScreenWrapper>
      <ScreenHeader text="Reset Password" />
      <ResetPasswordProvider>
        <ResetPasswordForm />
      </ResetPasswordProvider>
    </ScreenWrapper>
  );
};

export default ResetPassword;
