import { Stack } from "expo-router";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

export default function ProfileLayout() {
  return (
    <ProtectedRoute>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="edit" />
      </Stack>
    </ProtectedRoute>
  );
}
