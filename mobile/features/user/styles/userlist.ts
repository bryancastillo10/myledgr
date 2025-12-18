import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  countText: {
    fontSize: 14,
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 16,
  },
  loader: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});
