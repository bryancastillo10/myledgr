import { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Easing } from "react-native";
import useColor from "@/lib/providers/useColor";

type PingSize = "sm" | "md" | "lg" | "xl";

interface PingCirclesProps {
  size?: PingSize;
}

const SIZE_MAP = {
  sm: 30,
  md: 45,
  lg: 60,
  xl: 80,
};

const PingCircles = ({ size = "md" }: PingCirclesProps) => {
  const { COLORS } = useColor();

  const wrapperSize = SIZE_MAP[size];

  // Animate values
  const scaleLight = useRef(new Animated.Value(0)).current;
  const opacityLight = useRef(new Animated.Value(1)).current;

  const scalePrimary = useRef(new Animated.Value(0)).current;
  const opacityPrimary = useRef(new Animated.Value(1)).current;

  const scaleBorder = useRef(new Animated.Value(0)).current;
  const opacityBorder = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(scaleLight, {
          toValue: 1.5,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacityLight, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),

        Animated.timing(scalePrimary, {
          toValue: 2.5,
          duration: 1200,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacityPrimary, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),

        Animated.timing(scaleBorder, {
          toValue: 2,
          duration: 1500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacityBorder, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={[styles.wrapper, { width: wrapperSize, height: wrapperSize }]}>
      {/* Primary Circle */}
      <Animated.View
        style={[
          styles.circle,
          {
            width: wrapperSize * 0.7,
            height: wrapperSize * 0.7,
            borderRadius: (wrapperSize * 0.7) / 2,
            backgroundColor: COLORS.primary,
            transform: [{ scale: scalePrimary }],
            opacity: opacityPrimary,
          },
        ]}
      />

      {/* Border Circle */}
      <Animated.View
        style={[
          styles.circle,
          {
            width: wrapperSize * 0.85,
            height: wrapperSize * 0.85,
            borderRadius: (wrapperSize * 0.85) / 2,
            backgroundColor: COLORS.border,
            transform: [{ scale: scaleBorder }],
            opacity: opacityBorder,
          },
        ]}
      />

      {/* Light Circle */}
      <Animated.View
        style={[
          styles.circle,
          {
            width: wrapperSize * 0.55,
            height: wrapperSize * 0.55,
            borderRadius: (wrapperSize * 0.55) / 2,
            backgroundColor: COLORS.textLight,
            transform: [{ scale: scaleLight }],
            opacity: opacityLight,
          },
        ]}
      />
    </View>
  );
};

export default PingCircles;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  circle: {
    position: "absolute",
  },
});
