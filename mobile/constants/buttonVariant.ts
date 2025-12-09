import { COLORS } from "@/constants/colors";

const primaryShade = [COLORS.border, COLORS.primary, COLORS.text] as const;

const grayShade = ["#F0EDED", "#8C8989", "#2B2A2A"] as const;

const dangerShade = [COLORS.expense, "#EB4646", "#E67070"] as const;

const defaultShade = [COLORS.primary, COLORS.text, COLORS.textLight] as const;

export const variants = {
  primaryShade,
  grayShade,
  dangerShade,
  defaultShade,
};
