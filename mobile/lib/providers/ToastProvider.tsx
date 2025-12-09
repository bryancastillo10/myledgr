import { View, StyleSheet } from "react-native";
import Toast from "@/components/ui/Toast";
import { useEffect } from "react";

import { useToastStore } from "@/lib/zustand/toast";

const ToastProvider = () => {
  const { isVisible, message, status, hideToast } = useToastStore();

  useEffect(() => {
    let timer: number;
    if (isVisible) {
      timer = setTimeout(() => {
        hideToast();
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible, hideToast]);

  if (!isVisible) {
    return null;
  }

  return <Toast message={message} status={status} handleClose={hideToast} />;
};

export default ToastProvider;
