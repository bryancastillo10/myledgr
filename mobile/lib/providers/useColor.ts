import { useThemeStore } from "@/lib/zustand/theme";
import { THEMES } from "@/constants/colors";

type ThemeColors<T> = {
  primary: T;
  background: T;
  text: T;
  border: T;
  white: T;
  textLight: T;
  expense: T;
  income: T;
  card: T;
  shadow: T;
};

const useColor = () => {
  const { theme } = useThemeStore();

  const getColorPalette = (): ThemeColors<string> => {
    return THEMES[theme as keyof typeof THEMES];
  };

  const COLORS = getColorPalette();

  return {
    COLORS,
    getColorPalette,
  };
};

export default useColor;
