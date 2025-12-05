import { View, Text, TouchableOpacity } from "react-native";

import Button from "@/components/ui/Button";
// import { Ionicons } from "@expo/vector-icons";

import { styles } from "@/features/user/styles/home";

const HomePageHeader = () => {
  return (
    <View style={styles.header}>
      {/* Left Side */}
      <View style={styles.headerLeft}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.usernameText}>Email Address</Text>
        </View>
      </View>

      {/* Right Side */}
      <View style={styles.headerRight}>
        <Button textButton="Add" onPress={() => {}} />
      </View>
    </View>
  );
};

export default HomePageHeader;
