import { useState, useEffect } from "react";
import { useAuthStore } from "@/lib/zustand/user";

import { userApi } from "@/features/user/api/request";

const useGetUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { setUser } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const user = await userApi.getUser();

        if (user) {
          setUser(user);
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to fetch user";
        setError(message);
        console.error("Failed to get user profile:", message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setUser]);

  return {
    loading,
    error,
  };
};

export default useGetUser;
