import { View, Text, Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";

import useColor from "@/lib/providers/useColor";

interface RadioButtonProps {
  isSelected: boolean;
  label: string;
  onSelect: () => void;
  icon?: keyof typeof IconType.glyphMap;
}

const RadioButton = ({
  isSelected,
  label,
  onSelect,
  icon,
}: RadioButtonProps) => {
  const { COLORS } = useColor();

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftSection}>
        {icon && <Ionicons name={icon} size={24} color={COLORS.primary} />}
        <Text style={styles.radioText}>{label}</Text>
      </View>
      <Pressable onPress={onSelect} style={styles.pressable}>
        <View
          style={[
            styles.outerCircle,
            { borderColor: isSelected ? COLORS.primary : COLORS.text },
          ]}
        >
          {isSelected ? (
            <View
              style={[styles.innerDot, { backgroundColor: COLORS.primary }]}
            />
          ) : null}
        </View>
      </Pressable>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  leftSection: {
    flexDirection: "row",
    gap: 8,
  },
  radioText: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  pressable: {
    padding: 12,
  },
  outerCircle: {
    width: 24,
    height: 24,
    position: "relative",
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1.5,
  },
  innerDot: {
    position: "absolute",
    top: 4.5,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
