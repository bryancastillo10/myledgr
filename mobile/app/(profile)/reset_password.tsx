import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";

const ResetPassword = () => {
  return (
    <ScreenWrapper>
      <ScreenHeader text="Reset Password" />
      <View style={styles.container}>
        <Text>Reset Password Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
