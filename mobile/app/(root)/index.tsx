import { View, TouchableOpacity, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/assets/styles/home";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
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
            <TouchableOpacity style={styles.addButton} onPress={() => {}}>
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
