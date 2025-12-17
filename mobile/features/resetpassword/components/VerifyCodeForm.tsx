import { View, Text, Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useColor from "@/lib/providers/useColor";
import { useResetPasswordContext } from "@/features/resetpassword/context/resetPasswordStep";
import useResetPassword from "@/features/resetpassword/hooks/useResetPassword";

import CodeInput from "@/features/resetpassword/components/CodeInput";
import Button from "@/components/ui/Button";

const VerifyCodeForm = () => {
  const { COLORS } = useColor();

  const { email, code, onCodeChange, goBack } = useResetPasswordContext();

  const { handleVerifyCode, loading } = useResetPassword();

  const verifyReqBody = {
    email,
    code,
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.navigation} onPress={goBack}>
        <Ionicons name="arrow-back-outline" size={28} color={COLORS.primary} />
        <Text style={[styles.caption, { color: COLORS.primary }]}>go back</Text>
      </Pressable>

      <View style={styles.header}>
        <Ionicons name="lock-closed-sharp" size={24} color={COLORS.primary} />
        <View style={styles.description}>
          <Text style={[styles.caption, { color: COLORS.primary }]}>
            Enter sent verification code
          </Text>
          <Text style={[styles.caption, { color: COLORS.primary }]}>
            It expires in 5 minutes
          </Text>
        </View>
      </View>

      <CodeInput
        length={5}
        code={code}
        onCodeChange={onCodeChange}
        borderColor={COLORS.text}
        isCompleted={code.length === 5}
      />

      <Button
        loading={loading}
        textButton="Verify Code"
        onPress={() => handleVerifyCode(verifyReqBody)}
      />
    </View>
  );
};

export default VerifyCodeForm;

const styles = StyleSheet.create({
  container: {
    gap: 14,
    marginTop: 14,
    paddingVertical: 8,
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  description: {
    gap: 2,
  },
  caption: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
