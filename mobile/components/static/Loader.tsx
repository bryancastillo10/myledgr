import { ActivityIndicator, View } from "react-native";

import { styles } from "@/assets/styles/home";
import useColor from "@/lib/providers/useColor";

const Loader = () => {
  const { COLORS } = useColor();

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default Loader;
