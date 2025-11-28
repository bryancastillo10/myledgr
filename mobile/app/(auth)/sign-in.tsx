import { View, ScrollView, Text } from "react-native";
import { styles } from "@/assets/styles/auth";

import { RevenueImage } from "@/assets/svg";
import { COLORS } from "@/constants/colors";
export default function SignInPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <RevenueImage color={COLORS.primary} />
      </View>
    </ScrollView>
  );
}
