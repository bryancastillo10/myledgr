import { Redirect } from "expo-router";
import { useAuthStore } from "@/lib/zustand/user";
import useGetUser from "@/features/user/hooks/useGetUser";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);

  const hydrated = useAuthStore.persist.hasHydrated();
  const { loading, checked } = useGetUser();

  if (!hydrated) return null;
  if (loading) return null;
  if (checked && !user) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return <>{children}</>;
};
