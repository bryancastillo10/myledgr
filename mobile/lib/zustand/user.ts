import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthState } from "@/lib/zustand/interface";

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      user: null,

      setUser: (user) => set({ user }),

      clearUser: () => set({ user: null }),

      isAuthenticated: () => get().user !== null,
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
