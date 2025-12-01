import { View, Text } from "react-native";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

import Button from "@/components/ui/Button";

import { useRouter } from "expo-router";
import { RevenueImage } from "@/assets/svg";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View>
        <Text>Testing Welcome</Text>
        <RevenueImage />
      </View>
      <Button
        textButton="Start"
        onPress={() => router.push("/(auth)/sign-in")}
      />
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
