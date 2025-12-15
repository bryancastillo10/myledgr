import { View, TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import useColor from "@/lib/providers/useColor";

const TransactionAction = () => {
  const { COLORS } = useColor();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          {
            backgroundColor: COLORS.primary + "90",
            borderColor: COLORS.primary,
            shadowColor: COLORS.shadow,
          },
        ]}
      >
        <Ionicons style={[{ color: COLORS.white }]} name="pencil" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          {
            backgroundColor: COLORS.primary + "90",
            borderColor: COLORS.primary,
            shadowColor: COLORS.shadow,
          },
        ]}
      >
        <Ionicons style={[{ color: COLORS.white }]} name="trash" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default TransactionAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 20,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 28,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    borderWidth: 1,
  },
});
