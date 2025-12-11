import { View, Text, StyleSheet } from "react-native";

import PingCircles from "./PingCircle";
import { COLORS } from "@/constants/colors";

interface LoadingScreenProps {
  text: string;
}

const AnimatedLoadingScreen = ({ text }: LoadingScreenProps) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.animationWrapper}>
          <PingCircles />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default AnimatedLoadingScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  container: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "78%",
    height: 240,
    borderRadius: 24,
    backgroundColor: "rgba(245, 242, 239, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  animationWrapper: {
    marginBottom: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    bottom: 32,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: COLORS.text,
  },
});
