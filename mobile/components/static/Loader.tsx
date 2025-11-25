import { ActivityIndicator, View } from "react-native";

import { styles } from "@/assets/styles/home";
import { COLORS } from "@/constants/colors";

const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default Loader;
