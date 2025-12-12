import { View, Text, StyleSheet } from "react-native";
import { categoryIcons } from "@/constants/icons";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import RadioButton from "@/components/ui/RadioButton";
import Button from "@/components/ui/Button";

import useCreateTransaction from "@/features/transaction/hooks/useCreateTransaction";

export default function CreateTransaction() {
  const { transactionData, onChangeData, onSelectCategory, handleSubmit } =
    useCreateTransaction();

  return (
    <ScreenWrapper>
      <ScreenHeader text="Add Transaction" />
      <View style={styles.container}>
        <Input
          placeholder="Title"
          value={transactionData.title}
          onChange={onChangeData("title")}
        />

        <Input
          isNumeric
          placeholder="Amount"
          value={transactionData.amount.toString()}
          onChange={onChangeData("amount")}
        />

        <Select
          options={categoryIcons}
          label="Select Category"
          value={transactionData.icon}
          onChange={onChangeData("icon")}
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>Transaction Type</Text>
          <RadioButton
            icon="arrow-up-circle"
            isSelected={transactionData.category === "DEBIT"}
            label="Debit"
            onSelect={() => onSelectCategory("DEBIT")}
          />
          <RadioButton
            icon="arrow-down-circle"
            isSelected={transactionData.category === "CREDIT"}
            label="Credit"
            onSelect={() => onSelectCategory("CREDIT")}
          />
        </View>
        <View>
          <Button textButton="Add Transaction" onPress={handleSubmit} />
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
