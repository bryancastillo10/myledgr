import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";
import ToastProvider from "@/lib/providers/ToastProvider";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: inset.top }]}>
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
    backgroundColor: COLORS.background,
  },
});
