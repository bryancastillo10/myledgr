import { View, Text } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import Button from "@/components/ui/Button";

export default function ViewProfile() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View>
        <Text>View Profile Screen</Text>

        <Button
          textButton="Go to Home"
          onPress={() => router.push("/welcome")}
        />
      </View>
    </ScreenWrapper>
  );
}
