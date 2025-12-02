import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/features/auth/styles/auth";

import { CelebrationImage } from "@/assets/svg";
import { COLORS } from "@/constants/colors";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpPage() {
  const error = "No information provided";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MyLedgr App</Text>
      <View style={styles.illustration}>
        <CelebrationImage color={COLORS.primary} size={350} />
      </View>

      <View style={styles.formContainer}>
        <Input placeholder="Username" value="" onChange={() => {}} />

        <Input placeholder="Email" value="" onChange={() => {}} />

        <Input placeholder="Password" secureText value="" onChange={() => {}} />

        <Input
          placeholder="Confirm Password"
          secureText
          value=""
          onChange={() => {}}
        />

        <Button textButton="Sign Up" onPress={() => {}} />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Link href="/sign-in" asChild>
          <TouchableOpacity>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {error ? (
        <View style={styles.errorBox}>
          <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="close" size={20} color={COLORS.expense} />
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
}
