import { create } from "zustand";

import { ToastState, ToastActions } from "@/lib/zustand/interface";

type ToastStore = ToastState & ToastActions;

export const useToastStore = create<ToastStore>((set) => ({
  isVisible: false,
  message: "",
  status: "default",

  showToast: (message, status = "default") =>
    set({
      isVisible: true,
      message,
      status,
    }),

  hideToast: () =>
    set({
      isVisible: false,
      message: "",
      status: "default",
    }),
}));
