import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/features/auth/styles/auth";

import { RevenueImageTwo } from "@/assets/svg";
import { COLORS } from "@/constants/colors";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import useSignInForm from "@/features/auth/hooks/useSignInForm";
import AnimatedLoadingScreen from "@/components/static/AnimatedLoadingScreen";

export default function SignInPage() {
  const {
    signInData,
    error,
    onChangeData,
    loading,
    handleCloseErrror,
    handleSubmit,
  } = useSignInForm();

  if (loading) {
    return <AnimatedLoadingScreen text="Logging In" />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MyLedgr App</Text>
      <View style={styles.illustration}>
        <RevenueImageTwo color={COLORS.primary} size={350} />
      </View>
      <View style={{ marginTop: 12 }}>
        <Text style={styles.subtitle}>Sign In To Continue</Text>
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
        <Text style={styles.footerText}>Don&apos;t have an account?</Text>
        <Link href="/sign-up" asChild>
          <TouchableOpacity>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {error ? (
        <View style={styles.errorBox}>
          <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={handleCloseErrror}>
            <Ionicons name="close" size={20} color={COLORS.expense} />
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
}
