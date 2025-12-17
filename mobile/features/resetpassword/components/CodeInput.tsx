import { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import useColor from "@/lib/providers/useColor";

interface CodeInputProps {
  length: number;
  code: string;
  onCodeChange: (text: string) => void;
  isCompleted?: boolean;
  borderColor?: string;
}

const CodeInput = ({
  length = 5,
  code,
  onCodeChange,
  isCompleted = false,
  borderColor = "#101010",
}: CodeInputProps) => {
  const { COLORS } = useColor();
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (text: string) => {
    const sanitized = text.replace(/[^0-9]/g, "").slice(0, length);
    onCodeChange(sanitized);
  };

  const handlePress = () => {
    inputRef.current?.focus();
  };

  const renderBoxes = () => {
    return Array.from({ length }, (_, i) => {
      const digit = code[i] || "";
      const isFocused = i === code.length && !isCompleted;
      const isComplete = isCompleted && digit;

      return (
        <View
          key={i}
          style={[
            styles.box,
            isFocused && styles.boxFocused && { borderColor },
            isComplete && styles.boxCompleted && { borderColor: COLORS.income },
          ]}
        >
          {digit ? (
            <Text style={[styles.digit, { color: COLORS.text }]}>{digit}</Text>
          ) : null}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.boxesContainer}>{renderBoxes()}</View>
      </TouchableWithoutFeedback>
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={code}
        onChangeText={handleChangeText}
        keyboardType="number-pad"
        maxLength={length}
        autoFocus
        caretHidden
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  boxesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  box: {
    width: 56,
    height: 64,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f3f2",
  },
  boxFocused: {
    borderWidth: 2,
  },
  boxCompleted: {
    backgroundColor: "#d1fae5",
  },
  digit: {
    fontSize: 28,
    fontWeight: "600",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
});

export default CodeInput;
