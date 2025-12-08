import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

export default function EditTransaction() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View>
        <Text>Edit Transaction Screen</Text>

        <Pressable onPress={() => router.push("/(root)")}>
          <Text>Get Back</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}
