import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";
import ToastProvider from "@/lib/providers/ToastProvider";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const inset = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.screen, { paddingTop: inset.top }]}>
      {children}
      <ToastProvider />
    </ScrollView>
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
