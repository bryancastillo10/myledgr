import { useThemeStore } from "@/lib/zustand/theme";

import { userApi } from "@/features/user/api/request";
import { useState } from "react";
import { useToastStore } from "@/lib/zustand/toast";

const useTheme = () => {
  const { theme, setTheme } = useThemeStore();
  const { showToast } = useToastStore();

  const [updating, setUpdating] = useState<boolean>(false);

  const handleThemeChange = async (updateTheme: string) => {
    try {
      setUpdating(true);

      const res = await userApi.updateUser({ theme: updateTheme });

      if (!res) {
        throw new Error("Empty response from server");
      }

      setTheme(updateTheme);
    } catch (err) {
      console.error(err);
      showToast("Failed to update the theme", "error");
    } finally {
      setUpdating(false);
    }
  };

  return {
    theme,
    updating,
    handleThemeChange,
  };
};

export default useTheme;
