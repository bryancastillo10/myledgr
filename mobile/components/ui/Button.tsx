import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "@/constants/colors";
import { variants } from "@/constants/buttonVariant";

type ButtonVariantType = "primary" | "gray" | "danger";
interface ButtonProps {
  onPress: () => void;
  textButton: string;
  icon?: keyof typeof IconType.glyphMap;
  variant?: ButtonVariantType;
  textAlignment?: "flex-start" | "center" | "flex-end";
}

const Button = ({
  onPress,
  textButton,
  icon,
  variant = "primary",
  textAlignment = "center",
}: ButtonProps) => {
  const getButtonVariant = (variant: ButtonVariantType) => {
    switch (variant) {
      case "primary":
        return variants.primaryShade;
      case "gray":
        return variants.grayShade;

      case "danger":
        return variants.dangerShade;
      default:
        return variants.defaultShade;
    }
  };

  return (
    <LinearGradient colors={getButtonVariant(variant)} style={styles.button}>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: textAlignment }}
        onPress={onPress}
        activeOpacity={0.85}
      >
        {icon && <Ionicons name={icon} size={18} color={COLORS.white} />}
        <Text style={styles.buttonText}>{textButton}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 0.5,
    borderBottomWidth: 0,
    gap: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
});
