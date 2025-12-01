import { View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

interface InputProps {
  value: string;
  onChange: () => void;
  error?: boolean;
  placeholder?: string;
  secureText?: boolean;
}

const Input = ({
  value,
  onChange,
  placeholder = "Fill up",
  error = false,
  secureText = false,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChange={onChange}
        secureTextEntry={secureText}
        style={[styles.input, error && styles.errorInput]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.primary}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
  },
  errorInput: {
    borderColor: COLORS.expense,
  },
});
