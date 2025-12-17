import { View, StyleSheet } from "react-native";
import ProgressBar from "@/features/resetpassword/components/ProgressBar";

import { useResetPasswordContext } from "@/features/resetpassword/context/resetPasswordStep";
import { Steps } from "@/features/resetpassword/context/resetPasswordStep";

import RequestResetPasswordForm from "@/features/resetpassword/components/RequestResetPasswordForm";
import VerifyCodeForm from "@/features/resetpassword/components/VerifyCodeForm";
import UpdatePasswordForm from "@/features/resetpassword/components/UpdatePasswordForm";

const stepComponents: Record<Steps, () => React.ReactNode> = {
  [Steps.RequestReset]: () => <RequestResetPasswordForm />,
  [Steps.VerifyCode]: () => <VerifyCodeForm />,
  [Steps.Update]: () => <UpdatePasswordForm />,
};

const ResetPasswordForm = () => {
  const { step } = useResetPasswordContext();

  return (
    <View style={styles.container}>
      <View style={styles.content}>{stepComponents[step]()}</View>
      <ProgressBar step={step} totalSteps={step + 2} />
    </View>
  );
};

export default ResetPasswordForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  content: {
    marginVertical: 8,
  },
});
