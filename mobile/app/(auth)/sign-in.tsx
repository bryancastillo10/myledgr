import { View, ScrollView, Text } from "react-native";
import { styles } from "@/assets/styles/auth";

export default function SignInPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
      </View>
    </ScrollView>
  );
}
