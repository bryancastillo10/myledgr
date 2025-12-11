import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  illustration: {
    height: 310,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "semibold",
    marginVertical: 18,
    textAlign: "center",
  },
  formContainer: {
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 14,
    gap: 8,
  },
  footerText: {
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
