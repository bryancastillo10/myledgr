import { ReactNode } from "react";
import {
  Modal as RNModal,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Button from "@/components/ui/Button";

import TextHeader from "@/components/static/TextHeader";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

interface ModalProps {
  isOpen: boolean;
  actionLeftLabel: string;
  actionLeft: () => void;
  actionLeftDisabled?: boolean;
  actionRightLabel?: string;
  actionRight?: () => void;
  body: ReactNode;
  withHeader?: boolean;
  textHeader?: string;
  height?: number | `${number}%`;
}

const Modal = ({
  isOpen,
  body,
  actionLeft,
  actionRight,
  actionLeftLabel,
  actionRightLabel,
  withHeader = false,
  textHeader = "Modal Title",
  height = "30%",
}: ModalProps) => {
  return (
    <RNModal visible={isOpen} transparent animationType="fade">
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          style={[styles.container, { height }]}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.body}>
            {withHeader && (
              <View style={styles.title}>
                <TextHeader text={textHeader} />
                <TouchableOpacity onPress={actionRight}>
                  <Ionicons name="close" size={24} />
                </TouchableOpacity>
              </View>
            )}
            {body}
          </View>
          <View style={styles.actionRow}>
            <Button textButton={actionLeftLabel} onPress={actionLeft} />
            {actionRight && actionRightLabel && (
              <Button textButton={actionRightLabel} onPress={actionRight} />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(240, 244, 255, 0.7)",
  },
  container: {
    width: "78%",
    borderRadius: 24,
    backgroundColor: COLORS.background,
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  body: {
    marginTop: 15,
    paddingHorizontal: 8,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 16,
    gap: 12,
    width: "100%",
  },
});
