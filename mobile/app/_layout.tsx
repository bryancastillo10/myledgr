import { Stack } from "expo-router";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

export default function Layout() {
  return (
    <ProtectedRoute>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="(transaction)" options={{ headerShown: false }} />
      </Stack>
    </ProtectedRoute>
  );
}
