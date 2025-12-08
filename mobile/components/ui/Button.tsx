import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "@/constants/colors";

interface ButtonProps {
  onPress: () => void;
  icon?: keyof typeof IconType.glyphMap;
  textButton: string;
}

const Button = ({ onPress, textButton, icon }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {icon && <Ionicons name={icon} size={18} color={COLORS.white} />}
      <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: 16,
    padding: 18,
    justifyContent: "center",
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
