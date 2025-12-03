import { Redirect } from "expo-router";
import { useAuthStore } from "@/lib/zustand/user";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);

  const hydrated = useAuthStore.persist.hasHydrated();
  if (!hydrated) return null;

  if (!user) return <Redirect href="/(auth)/sign-in" />;

  return <>{children}</>;
};
