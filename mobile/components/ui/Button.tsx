import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

interface ButtonProps {
  onPress: () => void;
  textButton: string;
}

const Button = ({ onPress, textButton }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1.25,
  },
});
