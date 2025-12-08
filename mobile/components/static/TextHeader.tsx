import { View, Text, StyleSheet } from "react-native";

interface TextHeaderProps {
  text: string;
}

const TextHeader = ({ text }: TextHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "left",
    letterSpacing: 0.9,
  },
});
