import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  balanceCard: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
  },
  balanceTitle: {
    fontSize: 14,
    marginBottom: 8,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  balanceSubtitle: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 28,
    letterSpacing: -1,
  },
  balanceStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    borderTopWidth: 1,
  },
  balanceStatItem: {
    flex: 1,
    alignItems: "center",
  },
  statBadge: {
    width: 28,
    height: 28,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statIcon: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statDivider: {
    width: 1,

    marginHorizontal: 16,
  },
  balanceStatLabel: {
    fontSize: 13,
    marginBottom: 6,
    fontWeight: "500",
  },
  balanceStatAmount: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  placeholderLine: {
    borderRadius: 4,
  },
});
