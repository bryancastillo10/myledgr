import {
  View,
  TextInput,
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import useColor from "@/lib/providers/useColor";
import { Ionicons } from "@expo/vector-icons";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  placeholder?: string;
  secureText?: boolean;
  isNumeric?: boolean;
}

const Input = ({
  value,
  onChange,
  placeholder = "Fill up",
  error = false,
  secureText = false,
  isNumeric = false,
}: InputProps) => {
  const { COLORS } = useColor();

  const keyboardType: KeyboardTypeOptions = isNumeric ? "numeric" : "default";

  const [isRevealed, setIsRevealed] = useState<boolean>(secureText);

  const handleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  const handleNumericChange = (text: string) => {
    const cleanedText = text.replace(/[^0-9.]/g, "");
    onChange(cleanedText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={isNumeric ? handleNumericChange : onChange}
        secureTextEntry={isRevealed}
        keyboardType={keyboardType}
        style={[
          styles.input,
          error && { borderColor: COLORS.expense },
          {
            backgroundColor: COLORS.white,
            borderColor: COLORS.border,
            color: COLORS.text,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.primary}
      />

      {secureText && (
        <Pressable style={styles.iconContainer} onPress={handleReveal}>
          <Ionicons
            name={isRevealed ? "eye-off" : "eye-outline"}
            size={22}
            color={COLORS.textLight}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  input: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    fontSize: 16,
  },
  iconContainer: {
    position: "absolute",
    right: 16,
    bottom: 8,
    height: "100%",
    justifyContent: "center",
  },
});
