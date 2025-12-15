import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";

export default function EditTransaction() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <ScreenHeader text="Edit Transaction" />
      <View>
        <Text>Edit Transaction Here</Text>
      </View>
    </ScreenWrapper>
  );
}
