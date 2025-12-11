import { View } from "react-native";
import PingRectangle from "@/components/static/PingRectangle";
import { styles } from "@/features/transaction/styles/balanceCard";

import useColor from "@/lib/providers/useColor";

const BalanceCardSkeleton = () => {
  const { COLORS } = useColor();

  const placeholderLineStyle = (
    width: number,
    height: number,
    color: string,
    marginBottom = 0
  ) => ({
    width,
    height,
    backgroundColor: color,
    marginBottom,
  });

  return (
    <View
      style={[
        styles.balanceCard,
        {
          backgroundColor: COLORS.card,
          shadowColor: COLORS.shadow,
          borderColor: COLORS.border,
        },
      ]}
    >
      <PingRectangle
        style={styles.placeholderLine}
        shimmerStyle={placeholderLineStyle(100, 14, COLORS.textLight, 8)}
      />

      <PingRectangle
        style={styles.placeholderLine}
        shimmerStyle={placeholderLineStyle(250, 40, COLORS.primary, 28)}
      />

      <View style={[styles.balanceStats, { borderTopColor: COLORS.border }]}>
        <View style={styles.balanceStatItem}>
          <View style={styles.balanceSubtitle}>
            <PingRectangle
              style={styles.statBadge}
              shimmerStyle={{ backgroundColor: COLORS.textLight }}
            />
            <PingRectangle
              style={styles.placeholderLine}
              shimmerStyle={placeholderLineStyle(50, 13, COLORS.textLight, 6)}
            />
          </View>
          <PingRectangle
            style={styles.placeholderLine}
            shimmerStyle={placeholderLineStyle(80, 20, COLORS.income)}
          />
        </View>

        <View
          style={[styles.statDivider, { backgroundColor: COLORS.border }]}
        />

        <View style={styles.balanceStatItem}>
          <View style={styles.balanceSubtitle}>
            <PingRectangle
              style={styles.statBadge}
              shimmerStyle={{ backgroundColor: COLORS.textLight }}
            />
            <PingRectangle
              style={styles.placeholderLine}
              shimmerStyle={placeholderLineStyle(60, 13, COLORS.textLight, 6)}
            />
          </View>
          <PingRectangle
            style={styles.placeholderLine}
            shimmerStyle={placeholderLineStyle(80, 20, COLORS.expense)}
          />
        </View>
      </View>
    </View>
  );
};

export default BalanceCardSkeleton;
