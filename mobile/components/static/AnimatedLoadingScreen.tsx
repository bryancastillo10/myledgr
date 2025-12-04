import { useEffect, useRef } from "react";

import { Animated, View, Text, Easing, StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

interface LoadingScreenProps {
  text: string;
}

const AnimatedLoadingScreen = ({ text }: LoadingScreenProps) => {
  const scaleAnimLight = useRef(new Animated.Value(0)).current;
  const opacityAnimLight = useRef(new Animated.Value(1)).current;

  const scaleAnimPrimary = useRef(new Animated.Value(0)).current;
  const opacityAnimPrimary = useRef(new Animated.Value(1)).current;

  const scaleAnimBorder = useRef(new Animated.Value(0)).current;
  const opacityAnimBorder = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animatePing = () => {
      Animated.loop(
        Animated.parallel([
          Animated.timing(scaleAnimLight, {
            toValue: 1.5,
            duration: 800,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnimLight, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnimPrimary, {
            toValue: 2.5,
            duration: 1200,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnimPrimary, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnimBorder, {
            toValue: 2,
            duration: 1500,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnimBorder, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    animatePing();
  }, [
    scaleAnimPrimary,
    opacityAnimPrimary,
    scaleAnimBorder,
    opacityAnimBorder,
  ]);
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.animationWrapper}>
          <Animated.View
            style={[
              styles.pingPrimary,
              {
                transform: [{ scale: scaleAnimPrimary }],
                opacity: opacityAnimPrimary,
              },
            ]}
          />
          <Animated.View
            style={[
              styles.pingBorder,
              {
                transform: [{ scale: scaleAnimBorder }],
                opacity: opacityAnimBorder,
              },
            ]}
          />
          <Animated.View
            style={[
              styles.pingLight,
              {
                transform: [{ scale: scaleAnimLight }],
                opacity: opacityAnimLight,
              },
            ]}
          />
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
  pingPrimary: {
    position: "absolute",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primary,
  },
  pingBorder: {
    position: "absolute",
    width: 54,
    height: 54,
    borderRadius: 28,
    backgroundColor: COLORS.border,
  },
  pingLight: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: COLORS.textLight,
  },
  text: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 24,
    fontSize: 18,
    color: COLORS.text,
  },
});
