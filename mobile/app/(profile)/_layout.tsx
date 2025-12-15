import { Stack } from "expo-router";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

export default function ProfileLayout() {
  return (
    <ProtectedRoute>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="view" />
        <Stack.Screen name="reset_password" />
      </Stack>
    </ProtectedRoute>
  );
}
