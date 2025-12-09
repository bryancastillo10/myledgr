import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ThemeState } from "@/lib/zustand/interface";

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: "forest",

      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
