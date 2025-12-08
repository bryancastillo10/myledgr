import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const AccountSettingsHeader = () => {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.backArrow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textHeader}>Profile</Text>
      </View>
    </View>
  );
};

export default AccountSettingsHeader;

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative",
    padding: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  backArrow: {
    position: "absolute",
    left: 16,
    bottom: 18,
  },
  textHeader: {
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 0.9,
  },
});
