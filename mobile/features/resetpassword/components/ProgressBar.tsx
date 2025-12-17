import { View, StyleSheet } from "react-native";
import useColor from "@/lib/providers/useColor";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const { COLORS } = useColor();
  const stepsArray = Array.from({ length: totalSteps });

  return (
    <View style={styles.container}>
      {stepsArray.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            step >= index + 1
              ? { backgroundColor: COLORS.primary }
              : { backgroundColor: "#9ca3af" },
          ]}
        />
      ))}
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 8,
    marginHorizontal: 6,
  },
});
