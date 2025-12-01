import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/assets/styles/auth";

import { RevenueImage } from "@/assets/svg";
import { COLORS } from "@/constants/colors";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignInPage() {
  const error = "Error filling up";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MyLedgr App</Text>
      <RevenueImage color={COLORS.primary} />

      <Text style={styles.subtitle}>Sign In To Continue</Text>
      <View style={styles.formContainer}>
        <Input placeholder="Email" value="" onChange={() => {}} />

        <Input placeholder="Username" value="" onChange={() => {}} />

        <Button textButton="Sign In" onPress={() => {}} />
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

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already have an account?</Text>
      </View>
    </ScrollView>
  );
}
