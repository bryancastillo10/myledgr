import { Stack } from "expo-router";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

export default function RootLayout() {
  return (
    <ProtectedRoute>
      <Stack screenOptions={{ headerShown: false }} />
    </ProtectedRoute>
  );
}
