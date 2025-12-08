import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

interface ProfileRowProps {
  label: string;
  value: string | null;
  icon: keyof typeof IconType.glyphMap;
}

const ProfileRow = ({ label, value, icon }: ProfileRowProps) => {
  return (
    <TouchableOpacity style={styles.tab}>
      <View style={styles.sides}>
        <Ionicons name={icon} size={24} color={COLORS.textLight} />
        <Text style={styles.fieldLabel}>{label}</Text>
      </View>
      <View style={styles.sides}>
        <Text style={styles.fieldValue}>{value || "None"}</Text>
        <Ionicons name="chevron-forward" color={COLORS.primary} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileRow;

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  sides: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.primary,
  },
  fieldValue: {
    fontSize: 14,
  },
});
