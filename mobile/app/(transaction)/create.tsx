import { View, Text, StyleSheet } from "react-native";
import { categoryIcons } from "@/constants/icons";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import RadioButton from "@/components/ui/RadioButton";
import Button from "@/components/ui/Button";

export default function CreateTransaction() {
  return (
    <ScreenWrapper>
      <ScreenHeader text="Add Transaction" />
      <View style={styles.container}>
        <Input placeholder="Title" value="" onChange={() => {}} />

        <Input isNumeric placeholder="Amount" value="" onChange={() => {}} />

        <Select
          options={categoryIcons}
          label="Select Category"
          value=""
          onChange={() => {}}
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>Transaction Type</Text>
          <RadioButton
            icon="arrow-up-circle"
            isSelected
            label="Debit"
            onSelect={() => {}}
          />
          <RadioButton
            icon="arrow-down-circle"
            isSelected={false}
            label="Credit"
            onSelect={() => {}}
          />
        </View>
        <View>
          <Button textButton="Add Transaction" onPress={() => {}} />
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
