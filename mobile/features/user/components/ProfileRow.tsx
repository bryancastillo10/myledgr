import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Ionicons as IconType } from "@expo/vector-icons";

import { styles } from "@/features/user/styles/profilerow";
import useColor from "@/lib/providers/useColor";

interface ProfileRowProps {
  label: string;
  value: string | null;
  icon: keyof typeof IconType.glyphMap;
  onOpenModal?: () => void;
  canEdit?: boolean;
}

const ProfileRow = ({
  label,
  value,
  icon,
  onOpenModal,
  canEdit = true,
}: ProfileRowProps) => {
  const { COLORS } = useColor();

  const ReadOnlyProfileRow = (
    <View style={styles.tab}>
      <View style={styles.sides}>
        <Ionicons name={icon} size={24} color={COLORS.textLight} />
        <Text style={[styles.fieldLabel, { color: COLORS.primary }]}>
          {label}
        </Text>
      </View>
      <View style={styles.sides}>
        <Text style={[styles.fieldValue, { marginRight: 14 }]}>
          {value || "None"}
        </Text>
      </View>
    </View>
  );

  return canEdit ? (
    <TouchableOpacity style={styles.tab} onPress={onOpenModal}>
      <View style={styles.sides}>
        <Ionicons name={icon} size={24} color={COLORS.textLight} />
        <Text style={[styles.fieldLabel, { color: COLORS.primary }]}>
          {label}
        </Text>
      </View>
      <View style={styles.sides}>
        <Text style={styles.fieldValue}>{value || "None"}</Text>
        <Ionicons name="chevron-forward" color={COLORS.primary} size={24} />
      </View>
    </TouchableOpacity>
  ) : (
    ReadOnlyProfileRow
  );
};

export default ProfileRow;
