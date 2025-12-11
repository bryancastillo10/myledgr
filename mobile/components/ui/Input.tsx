import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import useColor from "@/lib/providers/useColor";
import { Ionicons } from "@expo/vector-icons";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
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
  const { COLORS } = useColor();

  const [isRevealed, setIsRevealed] = useState<boolean>(secureText);

  const handleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        secureTextEntry={isRevealed}
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
