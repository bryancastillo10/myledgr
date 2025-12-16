import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { categoryIcons } from "@/constants/icons";

import { useRouter } from "expo-router";
import useUpdateTransaction from "@/features/transaction/hooks/useUpdateTransaction";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";
import { NoTransactionsFound } from "@/features/transaction/components";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import RadioButton from "@/components/ui/RadioButton";
import Button from "@/components/ui/Button";

export default function EditTransaction() {
  const { id } = useLocalSearchParams();
  const updateHook = useUpdateTransaction(id as string);

  if (!updateHook)
    return (
      <ScreenWrapper>
        <ScreenHeader text="Edit Transaction" />
        <NoTransactionsFound />
      </ScreenWrapper>
    );

  const { updateData, onChangeData, onSelectCategory, loading, handleSubmit } =
    updateHook;

  const router = useRouter();

  return (
    <ScreenWrapper>
      <ScreenHeader text="Edit Transaction" />
      <View style={styles.container}>
        <Input
          placeholder="Title"
          value={updateData.title}
          onChange={onChangeData("title")}
        />

        <Input
          isNumeric
          placeholder="Amount"
          value={updateData.amount.toString()}
          onChange={onChangeData("amount")}
        />

        <Select
          options={categoryIcons}
          label="Select Category"
          value={updateData.icon}
          onChange={onChangeData("icon")}
        />
        <View style={styles.category}>
          <Text style={styles.categoryText}>Transaction Type</Text>
          <RadioButton
            icon="arrow-up-circle"
            isSelected={updateData.category === "DEBIT"}
            label="Debit"
            onSelect={() => onSelectCategory("DEBIT")}
          />
          <RadioButton
            icon="arrow-down-circle"
            isSelected={updateData.category === "CREDIT"}
            label="Credit"
            onSelect={() => onSelectCategory("CREDIT")}
          />
        </View>
        <View>
          <Button
            loading={loading}
            textButton="Save Transaction"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  category: {
    marginVertical: 12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "500",
  },
  submit: {
    marginVertical: 10,
  },
});
