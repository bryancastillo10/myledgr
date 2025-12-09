import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";

import { ToastStatus } from "@/lib/zustand/interface";

interface ToastProps {
  status: ToastStatus;
  message: string;
  handleClose: () => void;
}

const Toast = ({ handleClose, message, status }: ToastProps) => {
  const getStatusStyle = (status: ToastStatus) => {
    switch (status) {
      case "success":
        return {
          icon: "checkmark-circle",
          background: "#C8E6C9",
          text: "#2E7D32",
        };
      case "error":
        return {
          icon: "alert-circle",
          background: "#FFE5E5",
          text: "#C62828",
        };
      default: {
        return {
          icon: "warning",
          background: "#F0F2BF",
          text: "#7C8207",
        };
      }
    }
  };

  const currentStatus = status || "default";
  const variantStyle = getStatusStyle(currentStatus);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: variantStyle.background,
          borderLeftColor: variantStyle.text,
        },
      ]}
    >
      <Ionicons
        name={variantStyle.icon as keyof typeof IconType.glyphMap}
        size={20}
        color={variantStyle.text}
      />
      <Text style={[styles.text, { color: variantStyle.text }]}>{message}</Text>
      <TouchableOpacity onPress={handleClose}>
        <Ionicons name="close" size={20} color={variantStyle.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  text: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
});
