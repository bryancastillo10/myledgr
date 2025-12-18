import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerLogo: {
    width: 75,
    height: 75,
  },
  welcomeContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    marginBottom: 2,
  },
  usernameText: {
    fontSize: 16,
    fontWeight: "600",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
});
