import { useState, useCallback, useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/lib/zustand/user";

import { userApi } from "@/features/user/api/request";
import { useThemeStore } from "@/lib/zustand/theme";

const useGetUser = () => {
  const user = useAuthStore((state) => state.user);
  const { setTheme } = useThemeStore();

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const { setUser } = useAuthStore();

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);

      const user = await userApi.getUser();

      if (user) {
        setUser(user);
        setTheme(user.theme);
      }
      return user;
    } catch (err) {
      console.error("Failed to get user profile", err);
      router.push("/welcome");
    } finally {
      setLoading(false);
    }
  }, [setUser, setTheme, router]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    user,
    loading,
    refreshUser: fetchUser,
  };
};

export default useGetUser;
