import { View, Text, StyleSheet } from "react-native";
import { User } from "@/lib/zustand/interface";

import useColor from "@/lib/providers/useColor";
import { formatDate } from "@/features/user/utils";

const UserCard = ({ user }: { user: User }) => {
  const { COLORS } = useColor();

  const getRoleBadgeColor = (role: "ADMIN" | "PUBLIC") => {
    return role === "ADMIN" ? COLORS.income : COLORS.textLight;
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View
          style={[styles.avatarContainer, { backgroundColor: COLORS.primary }]}
        >
          <Text style={styles.avatarText}>
            {user.username.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={[styles.username, { color: COLORS.primary }]}>
            {user.username}
          </Text>
          <Text style={[styles.email, { color: COLORS.text }]}>
            {user.email}
          </Text>
        </View>
        <View
          style={[
            styles.roleBadge,
            {
              backgroundColor: getRoleBadgeColor(
                user.role as "ADMIN" | "PUBLIC"
              ),
            },
          ]}
        >
          <Text style={styles.roleText}>{user.role}</Text>
        </View>
      </View>

      {user.bio && <Text style={styles.bio}>{user.bio}</Text>}

      <View style={styles.cardFooter}>
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: COLORS.text }]}>
            Currency:
          </Text>
          <Text style={[styles.infoValue, { color: COLORS.shadow }]}>
            {user.currency}
          </Text>
        </View>
        {user.address && (
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: COLORS.text }]}>
              Address:
            </Text>
            <Text style={[styles.infoValue, { color: COLORS.shadow }]}>
              {user.address}
            </Text>
          </View>
        )}
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: COLORS.text }]}>
            Joined:
          </Text>
          <Text style={[styles.infoValue, { color: COLORS.shadow }]}>
            {formatDate(user.createdAt)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4f3f2",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#f4f3f2",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  email: {
    fontSize: 13,
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  roleText: {
    color: "#f4f3f2",
    fontSize: 11,
    fontWeight: "600",
  },
  bio: {
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 12,
    fontStyle: "italic",
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 12,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: "600",
    width: 80,
  },
  infoValue: {
    fontSize: 13,
    color: "#1f2937",
    flex: 1,
  },
});
