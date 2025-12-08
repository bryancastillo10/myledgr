import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

export default function CreateTransaction() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View>
        <Text>Create Transaction Screen</Text>

        <Pressable onPress={() => router.back()}>
          <Text>Get Back</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}
