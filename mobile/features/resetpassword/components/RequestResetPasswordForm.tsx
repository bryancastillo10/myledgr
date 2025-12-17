import { Text, View, StyleSheet } from "react-native";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Ionicons } from "@expo/vector-icons";

import useColor from "@/lib/providers/useColor";
import { useResetPasswordContext } from "@/features/resetpassword/context/resetPasswordStep";
import useResetPassword from "@/features/resetpassword/hooks/useResetPassword";

const RequestResetPasswordForm = () => {
  const { COLORS } = useColor();
  const { email, onEmailChange } = useResetPasswordContext();

  const { handleResetRequest, loading } = useResetPassword();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="mail-outline" size={24} color={COLORS.primary} />
        <Text style={[styles.caption, { color: COLORS.primary }]}>
          Please enter your email
        </Text>
      </View>
      <Input
        placeholder="Email Address"
        value={email}
        onChange={onEmailChange}
      />
      <Button
        loading={loading}
        textButton="Request Code"
        onPress={() => handleResetRequest(email)}
      />
    </View>
  );
};

export default RequestResetPasswordForm;

const styles = StyleSheet.create({
  container: {
    gap: 14,
    marginTop: 14,
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  caption: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
