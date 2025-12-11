import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  transactionsList: {
    flex: 1,
    marginHorizontal: 20,
  },
  transactionLeft: {
    flex: 1,
  },
  transactionsListContent: {
    paddingBottom: 20,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  transactionsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 5,
  },
  transactionCategory: {
    fontSize: 14,
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
  },
  transactionCard: {
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionContent: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
});
