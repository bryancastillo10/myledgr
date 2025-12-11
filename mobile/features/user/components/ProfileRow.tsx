import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";
import useColor from "@/lib/providers/useColor";

interface ProfileRowProps {
  label: string;
  value: string | null;
  icon: keyof typeof IconType.glyphMap;
  canEdit?: boolean;
}

const ProfileRow = ({
  label,
  value,
  icon,
  canEdit = true,
}: ProfileRowProps) => {
  const { COLORS } = useColor();

  return (
    <TouchableOpacity style={styles.tab}>
      <View style={styles.sides}>
        <Ionicons name={icon} size={24} color={COLORS.textLight} />
        <Text style={[styles.fieldLabel, { color: COLORS.primary }]}>
          {label}
        </Text>
      </View>
      <View style={styles.sides}>
        <Text style={[styles.fieldValue, !canEdit && { marginRight: 14 }]}>
          {value || "None"}
        </Text>
        {canEdit && (
          <Ionicons name="chevron-forward" color={COLORS.primary} size={24} />
        )}
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
  },
  fieldValue: {
    fontSize: 14,
  },
});
