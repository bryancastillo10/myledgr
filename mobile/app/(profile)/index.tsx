import { View, Text } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import Button from "@/components/ui/Button";

import { useAuthStore } from "@/lib/zustand/user";

export default function ViewProfile() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  let routeLink;
  if (!user) return routeLink == "/welcome";

  return (
    <ScreenWrapper>
      <View>
        <Text>View Profile Screen</Text>

        <Button
          textButton="Go to Home"
          onPress={() => router.push(routeLink || "/(root)")}
        />
      </View>
    </ScreenWrapper>
  );
}
