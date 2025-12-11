import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/features/auth/styles/auth";
import { Link } from "expo-router";

import { CelebrationImage } from "@/assets/svg";
import useColor from "@/lib/providers/useColor";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import useSignUpForm from "@/features/auth/hooks/useSignUpForm";
import AnimatedLoadingScreen from "@/components/static/AnimatedLoadingScreen";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

export default function SignUpPage() {
  const { COLORS } = useColor();

  const { signUpData, loading, onChangeData, handleSubmit } = useSignUpForm();

  if (loading) {
    return <AnimatedLoadingScreen text="Registering an Account" />;
  }

  return (
    <ScreenWrapper>
      <ScrollView>
        <Text style={[styles.title, { color: COLORS.text }]}>MyLedgr App</Text>
        <View style={styles.illustration}>
          <CelebrationImage color={COLORS.primary} size={350} />
        </View>

        <View style={styles.formContainer}>
          <Input
            placeholder="Username"
            value={signUpData.username}
            onChange={onChangeData("username")}
          />

          <Input
            placeholder="Email"
            value={signUpData.email}
            onChange={onChangeData("email")}
          />

          <Input
            placeholder="Password"
            secureText
            value={signUpData.password}
            onChange={onChangeData("password")}
          />

          <Input
            placeholder="Confirm Password"
            secureText
            value={signUpData.confirmPassword}
            onChange={onChangeData("confirmPassword")}
          />

          <Button textButton="Sign Up" onPress={handleSubmit} />
        </View>

        <View style={styles.footerContainer}>
          <Text style={[styles.footerText, { color: COLORS.text }]}>
            Already have an account?
          </Text>
          <Link href="/sign-in" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
