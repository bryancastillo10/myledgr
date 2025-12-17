import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "@/features/resetpassword/components/ProgressBar";

import { useResetPasswordContext } from "@/features/resetpassword/context/resetPasswordStep";
import { Steps } from "@/features/resetpassword/context/resetPasswordStep";

const ResetPasswordForm = () => {
  const { step } = useResetPasswordContext();

  return (
    <View style={styles.container}>
      <Text>Reset Password Screen</Text>
      <ProgressBar step={step} totalSteps={step + 2} />
    </View>
  );
};

export default ResetPasswordForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
