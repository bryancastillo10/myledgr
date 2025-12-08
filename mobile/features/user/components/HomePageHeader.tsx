import { View, Text, TouchableOpacity } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { styles } from "@/features/user/styles/home";
import { COLORS } from "@/constants/colors";

import useSignOut from "@/features/auth/hooks/useSignOut";
import Avatar from "@/features/user/components/Avatar";

import { User } from "@/lib/zustand/interface";
import { useRouter } from "expo-router";

interface HomePageHeaderProps {
  user: User | null;
}

const HomePageHeader = ({ user }: HomePageHeaderProps) => {
  const { handleSignOut } = useSignOut();

  const router = useRouter();

  return (
    <View style={styles.header}>
      {/* Left Side */}
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => router.push("/(profile)")}>
          <Avatar />
        </TouchableOpacity>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.usernameText}>
            {user?.username || "User Name"}
          </Text>
        </View>
      </View>

      {/* Right Side */}
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={handleSignOut}>
          <FontAwesome name="sign-out" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePageHeader;
