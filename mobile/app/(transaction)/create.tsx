import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

import Select from "@/components/ui/Select";
import { currencySymbols } from "@/constants/currency";

export default function CreateTransaction() {
  const router = useRouter();

  const [category, setCategory] = useState<string | null>(null);

  const categoryOptions = [
    { label: "Income", value: "CREDIT" },
    { label: "Expense", value: "DEBIT" },
  ];

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Select
          label="Select Category"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
        />

        <Pressable onPress={() => router.back()}>
          <Text>Get Back</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});
