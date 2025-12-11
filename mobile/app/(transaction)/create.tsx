import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/layout/ScreenWrapper";

import Select from "@/components/ui/Select";

import RadioButton from "@/components/ui/RadioButton";
import ScreenHeader from "@/components/layout/ScreenHeader";

export default function CreateTransaction() {
  const router = useRouter();

  const [category, setCategory] = useState<string | null>(null);
  const [radioSelected, setRadioSelected] = useState<boolean>(false);

  const categoryOptions = [
    { label: "Income", value: "CREDIT" },
    { label: "Expense", value: "DEBIT" },
  ];

  return (
    <ScreenWrapper>
      <ScreenHeader text="Add Transaction" />

      <View style={styles.container}>
        <Select
          label="Select Category"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
        />

        <RadioButton
          isSelected={radioSelected}
          label="Test Radio Button"
          icon="beaker"
          onSelect={() => setRadioSelected(!radioSelected)}
        />
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
