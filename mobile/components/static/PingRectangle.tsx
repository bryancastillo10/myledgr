import { Animated, Easing, StyleProp, ViewStyle } from "react-native";
import { useRef, useEffect } from "react";

interface PingRectangleProps {
  style?: StyleProp<ViewStyle>;
  shimmerStyle?: StyleProp<ViewStyle>;
}

const PingRectangle = ({ style, shimmerStyle }: PingRectangleProps) => {
  const animatedValue = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1.0,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0.4,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    pulse.start();

    return () => pulse.stop();
  }, [animatedValue]);

  return (
    <Animated.View style={[style, shimmerStyle, { opacity: animatedValue }]} />
  );
};

export default PingRectangle;
