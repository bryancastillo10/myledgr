import { View, Text, Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import useColor from "@/lib/providers/useColor";
import { useResetPasswordContext } from "@/features/resetpassword/context/resetPasswordStep";

import CodeInput from "@/features/resetpassword/components/CodeInput";
import Button from "@/components/ui/Button";

const VerifyCodeForm = () => {
  const { COLORS } = useColor();

  const { code, onCodeChange, goBack, goForward } = useResetPasswordContext();

  return (
    <View style={styles.container}>
      <Pressable style={styles.navigation} onPress={goBack}>
        <Ionicons name="arrow-back-outline" size={28} color={COLORS.primary} />
        <Text style={[styles.caption, { color: COLORS.primary }]}>go back</Text>
      </Pressable>

      <View style={styles.header}>
        <Ionicons name="lock-closed-sharp" size={24} color={COLORS.primary} />
        <Text style={[styles.caption, { color: COLORS.primary }]}>
          Enter sent verification code
        </Text>
      </View>

      <CodeInput
        length={5}
        code={code}
        onCodeChange={onCodeChange}
        borderColor={COLORS.text}
        isCompleted={code.length === 5}
      />

      <Button textButton="Verify Code" onPress={goForward} />
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
  caption: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
