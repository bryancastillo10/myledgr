import { ScrollView, View, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import TextHeader from "@/components/static/TextHeader";

import { useAuthStore } from "@/lib/zustand/user";

import AccountSettingsHeader from "@/features/user/components/AccountSettingsHeader";
import ProfileRow from "@/features/user/components/ProfileRow";
import Button from "@/components/ui/Button";

import { formatStringRender, formatDate } from "@/features/user/utils";

export default function ViewProfile() {
  const user = useAuthStore((state) => state.user);

  if (!user) return <Redirect href="/welcome" />;

  return (
    <ScreenWrapper>
      <ScrollView>
        <AccountSettingsHeader />

        <View style={styles.content}>
          <ProfileRow label="Username" value={user.username} icon="person" />

          <ProfileRow label="Email" value={user.email} icon="mail" />

          <ProfileRow label="Bio" value={user?.bio || null} icon="ribbon" />

          <ProfileRow
            label="Location"
            value={user?.address || null}
            icon="location"
          />

          <ProfileRow
            label="User Role"
            value={formatStringRender(user.role) || null}
            icon="shield"
            canEdit={false}
          />

          <ProfileRow
            label="Account Created"
            value={formatDate(user.createdAt)}
            icon="calendar"
            canEdit={false}
          />
        </View>

        <View style={[styles.content, { marginVertical: 14 }]}>
          <TextHeader text="App Settings" />

          <ProfileRow
            label="App Theme"
            value={formatStringRender(user.theme)}
            icon="color-palette"
          />
          <ProfileRow label="Currency" value={user.currency} icon="cash" />
        </View>

        <View style={[styles.content, { marginVertical: 14 }]}>
          <TextHeader text="Advanced" />

          <Button icon="key" textButton="Reset Password" onPress={() => {}} />

          <Button icon="log-out" textButton="Sign Out" onPress={() => {}} />

          <Button
            icon="trash"
            textButton="Delete Account"
            variant="danger"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
  },
});
