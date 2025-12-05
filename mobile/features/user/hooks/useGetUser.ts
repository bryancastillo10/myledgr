import { useState, useEffect } from "react";
import { useAuthStore } from "@/lib/zustand/user";

import { userApi } from "@/features/user/api/request";

const useGetUser = () => {
  const user = useAuthStore((state) => state.user);

  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const { setUser } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const user = await userApi.getUser();

        if (user) {
          setUser(user);
        }
      } catch (err) {
        console.error("Failed to get user profile");
      } finally {
        setLoading(false);
        setChecked(true);
      }
    };

    fetchUser();
  }, [setUser]);

  return {
    user,
    loading,
    checked,
  };
};

export default useGetUser;
