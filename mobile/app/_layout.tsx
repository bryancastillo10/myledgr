import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ScreenWrapper from "@/components/layout/ScreenWrapper";

export default function Layout() {
  return (
    <ScreenWrapper>
      <Slot />
      <StatusBar style="dark" />
    </ScreenWrapper>
  );
}
