import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import useColor from "@/lib/providers/useColor";

type ButtonVariantType = "primary" | "gray" | "danger";
interface ButtonProps {
  onPress: () => void;
  textButton: string;
  icon?: keyof typeof IconType.glyphMap;
  variant?: ButtonVariantType;
  textAlignment?: "flex-start" | "center" | "flex-end";
  containerPadding?: number;
}

const Button = ({
  onPress,
  textButton,
  icon,
  variant = "primary",
  textAlignment = "center",
  containerPadding = 18,
}: ButtonProps) => {
  const { COLORS } = useColor();

  const getButtonVariant = (variant: ButtonVariantType) => {
    const primaryShade = [COLORS.border, COLORS.primary, COLORS.text] as const;

    const grayShade = ["#F0EDED", "#8C8989", "#2B2A2A"] as const;

    const dangerShade = [COLORS.expense, "#EB4646", "#E67070"] as const;

    const defaultShade = [
      COLORS.primary,
      COLORS.text,
      COLORS.textLight,
    ] as const;

    switch (variant) {
      case "primary":
        return primaryShade;
      case "gray":
        return grayShade;

      case "danger":
        return dangerShade;
      default:
        return defaultShade;
    }
  };

  return (
    <LinearGradient
      colors={getButtonVariant(variant)}
      style={[
        styles.button,
        { shadowColor: COLORS.shadow, padding: containerPadding },
      ]}
    >
      <TouchableOpacity
        style={[styles.content, { justifyContent: textAlignment }]}
        onPress={onPress}
        activeOpacity={0.85}
      >
        {icon && <Ionicons name={icon} size={18} color={COLORS.white} />}
        <Text style={[styles.buttonText, { color: COLORS.white }]}>
          {textButton}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 0.5,
    borderBottomWidth: 0,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
});
