import { View, ScrollView, Text } from "react-native";
import { styles } from "@/assets/styles/auth";

import { RevenueImage } from "@/assets/svg";
import { COLORS } from "@/constants/colors";
import Input from "@/components/ui/Input";

export default function SignInPage() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>MyLedgr App</Text>
        <RevenueImage color={COLORS.primary} />

        <Text style={styles.subtitle}>Sign In To Continue</Text>
        <View style={styles.formContainer}>
          <Input placeholder="Email" value="" onChange={() => {}} />

          <Input placeholder="Username" value="" onChange={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}
