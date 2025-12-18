import { View, Text, StyleSheet } from "react-native";
import useColor from "@/lib/providers/useColor";
import ScreenHeader from "@/components/layout/ScreenHeader";

const NoUserList = () => {
  const { COLORS } = useColor();
  return (
    <View style={styles.emptyContainer}>
      <ScreenHeader text="User List" />
      <Text style={[styles.emptyText, { color: COLORS.primary }]}>
        No users found
      </Text>
    </View>
  );
};

export default NoUserList;

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 16,
  },
});
