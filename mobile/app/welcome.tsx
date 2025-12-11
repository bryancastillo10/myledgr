import { View, Text } from "react-native";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

import Button from "@/components/ui/Button";
import { styles } from "@/features/auth/styles/welcome";
import { useRouter } from "expo-router";
import { RevenueImage } from "@/assets/svg";
import useColor from "@/lib/providers/useColor";

const WelcomeScreen = () => {
  const { COLORS } = useColor();

  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={[styles.container, { backgroundColor: COLORS.background }]}>
        <Text style={[styles.title, { color: COLORS.text }]}>MyLedgr App</Text>
        <View style={styles.illustration}>
          <RevenueImage color={COLORS.primary} />
        </View>

        <View style={styles.ctaContainer}>
          <Text style={[styles.subtitle, { color: COLORS.text }]}>
            Your personal finance tracking app
          </Text>

          <View style={{ marginTop: 20 }}>
            <Button
              textButton="Get Started"
              onPress={() => router.push("/(auth)/sign-in")}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
