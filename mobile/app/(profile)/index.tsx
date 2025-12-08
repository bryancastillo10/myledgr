import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

import { useAuthStore } from "@/lib/zustand/user";

import AccountSettingsHeader from "@/features/user/components/AccountSettingsHeader";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

export default function ViewProfile() {
  const user = useAuthStore((state) => state.user);

  let routeLink;
  if (!user) return routeLink == "/welcome";

  return (
    <ScreenWrapper>
      <ScrollView>
        <AccountSettingsHeader />

        <View style={styles.content}>
          <TouchableOpacity style={styles.tab}>
            <View style={styles.sides}>
              <Ionicons name="person" size={24} color={COLORS.primary} />
              <Text>Username</Text>
            </View>
            <View style={styles.sides}>
              <Text>Slash</Text>
              <Ionicons name="chevron-forward" size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  sides: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
