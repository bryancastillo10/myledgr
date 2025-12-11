import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ToastProvider from "@/lib/providers/ToastProvider";
import useColor from "@/lib/providers/useColor";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const { COLORS } = useColor();
  const inset = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.screen,
        { paddingTop: inset.top, backgroundColor: COLORS.background },
      ]}
    >
      {children}
      <ToastProvider />
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
  },
});
