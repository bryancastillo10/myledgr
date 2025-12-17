import { View, Text, Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import useColor from "@/lib/providers/useColor";
import { useResetPasswordContext } from "@/features/resetpassword/context/resetPasswordStep";

const UpdatePasswordForm = () => {
  const { COLORS } = useColor();
  const { updatePassword, onUpdatePasswordChange } = useResetPasswordContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="key" size={24} color={COLORS.primary} />
        <Text style={[styles.caption, { color: COLORS.primary }]}>
          Provide a new password
        </Text>
      </View>

      <Input
        placeholder="New password"
        value={updatePassword.password}
        onChange={onUpdatePasswordChange("password")}
      />

      <Input
        placeholder="Retype new password"
        value={updatePassword.confirmPassword}
        onChange={onUpdatePasswordChange("confirmPassword")}
      />

      <Button textButton="Update Password" onPress={() => {}} />
    </View>
  );
};

export default UpdatePasswordForm;

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
  caption: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
