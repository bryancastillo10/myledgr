import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  sides: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  fieldValue: {
    fontSize: 14,
  },
});
