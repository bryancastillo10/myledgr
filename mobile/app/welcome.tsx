import { View, Text } from "react-native";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View>
        <Text>Testing Welcome</Text>
      </View>
      <Button
        textButton="Start"
        onPress={() => router.push("/(auth)/sign-in")}
      />
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
