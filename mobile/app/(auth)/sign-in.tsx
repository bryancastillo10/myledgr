import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/features/auth/styles/auth";

import { RevenueImageTwo } from "@/assets/svg";
import useColor from "@/lib/providers/useColor";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import useSignInForm from "@/features/auth/hooks/useSignInForm";
import AnimatedLoadingScreen from "@/components/static/AnimatedLoadingScreen";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

export default function SignInPage() {
  const { COLORS } = useColor();

  const { signInData, onChangeData, loading, handleSubmit } = useSignInForm();

  if (loading) {
    return <AnimatedLoadingScreen text="Logging In" />;
  }

  return (
    <ScreenWrapper>
      <ScrollView>
        <Text style={[styles.title, { color: COLORS.text }]}>MyLedgr App</Text>
        <View style={styles.illustration}>
          <RevenueImageTwo color={COLORS.primary} size={350} />
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={[styles.subtitle, { color: COLORS.text }]}>
            Sign In To Continue
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            placeholder="Email Address"
            value={signInData.email}
            onChange={onChangeData("email")}
          />

          <Input
            placeholder="Password"
            secureText
            value={signInData.password}
            onChange={onChangeData("password")}
          />

          <Button textButton="Sign In" onPress={handleSubmit} />
        </View>

        <View style={styles.footerContainer}>
          <Text style={[styles.footerText, { color: COLORS.text }]}>
            Don&apos;t have an account?
          </Text>
          <Link href="/sign-up" asChild>
            <TouchableOpacity>
              <Text style={[styles.linkText, { color: COLORS.primary }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
