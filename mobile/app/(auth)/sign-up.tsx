import { ScrollView, View, Text } from "react-native";
import { styles } from "@/features/auth/styles/auth";

export default function SignUpPage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MyLedgr App</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
    </ScrollView>
  );
}
