import { ReactNode } from "react";
import {
  Modal as RNModal,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import Button from "@/components/ui/Button";
import TextHeader from "@/components/static/TextHeader";
import { Ionicons } from "@expo/vector-icons";
import useColor from "@/lib/providers/useColor";

interface ModalProps {
  isOpen: boolean;
  actionLeftLabel: string;
  actionLeft: () => void;
  actionLeftDisabled?: boolean;
  actionRightLabel?: string;
  actionRight?: () => void;
  body: ReactNode;
  loading?: boolean;
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
  loading = false,
}: ModalProps) => {
  const { COLORS } = useColor();

  return (
    <RNModal visible={isOpen} transparent animationType="fade">
      <Pressable onPress={actionLeft} style={styles.overlay}>
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={[
            styles.container,
            {
              height,
              backgroundColor: COLORS.background,
              shadowColor: COLORS.shadow,
            },
          ]}
        >
          <KeyboardAvoidingView
            style={styles.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* Header Section */}
            {withHeader && (
              <View style={styles.header}>
                <View style={styles.titleContainer}>
                  <TextHeader text={textHeader} />
                </View>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={actionLeft}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Ionicons name="close" size={24} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            )}

            {/* Body Section */}
            <View style={styles.bodyContainer}>{body}</View>

            {/* Action Buttons */}
            <View style={styles.footer}>
              <View style={styles.actionRow}>
                <View style={styles.buttonWrapper}>
                  <Button
                    variant="gray"
                    textButton={actionLeftLabel}
                    onPress={actionLeft}
                    containerPadding={12}
                    loading={loading}
                  />
                </View>
                {actionRight && actionRightLabel && (
                  <View style={styles.buttonWrapper}>
                    <Button
                      textButton={actionRightLabel}
                      onPress={actionRight}
                      containerPadding={12}
                      loading={loading}
                    />
                  </View>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </Pressable>
      </Pressable>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    width: "85%",
    maxWidth: 400,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.05)",
  },
  titleContainer: {
    flex: 1,
    marginRight: 12,
  },
  closeButton: {
    padding: 4,
    borderRadius: 20,
  },
  bodyContainer: {
    paddingHorizontal: 16,
    marginVertical: 4,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.05)",
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
  },
  buttonWrapper: {
    flex: 1,
  },
});
