import { currencySymbols } from "@/constants/currency";

export const getCurrencySymbol = (
  code: keyof typeof currencySymbols | string
) => {
  if (code in currencySymbols) {
    return currencySymbols[code as keyof typeof currencySymbols];
  }

  return "$";
};
