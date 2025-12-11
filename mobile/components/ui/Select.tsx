import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import useColor from "@/lib/providers/useColor";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value: string | null;
  onChange: (value: string) => void;
}

const Select = ({
  options,
  value,
  onChange,
  label = "Select here",
}: SelectProps) => {
  const { COLORS } = useColor();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectedLabel =
    options.find((opt) => opt.value === value)?.label ?? label;

  const handleOpenOptions = () => {
    setIsOpen(!isOpen);
  };

  const primaryShade = [COLORS.border, COLORS.primary, COLORS.text] as const;

  return (
    <View style={{ overflow: "visible" }}>
      <LinearGradient
        colors={primaryShade}
        style={[styles.gradient, { shadowColor: COLORS.shadow }]}
      >
        <TouchableOpacity style={styles.content} onPress={handleOpenOptions}>
          <View>
            <Text style={[styles.selectText, { color: COLORS.white }]}>
              {selectedLabel}
            </Text>
          </View>
          <Ionicons
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={18}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </LinearGradient>
      {isOpen && (
        <View
          style={[
            styles.options,
            {
              borderColor: COLORS.border,
              backgroundColor: COLORS.white,
            },
          ]}
        >
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => {
              const isSelected = item.value === value;
              return (
                <Pressable
                  onPress={() => {
                    onChange(item.value);
                    setIsOpen(false);
                  }}
                  style={[
                    styles.optionItem,
                    isSelected && { backgroundColor: COLORS.primary },
                  ]}
                >
                  <Text
                    style={[
                      { color: COLORS.text, fontWeight: "700" },
                      isSelected && {
                        color: COLORS.white,
                      },
                    ]}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  gradient: {
    position: "relative",
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 0.5,
    borderBottomWidth: 0,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  selectText: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  options: {
    position: "absolute",
    top: 58,
    width: "100%",
    maxHeight: 200,
    zIndex: 100,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    overflow: "hidden",
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
});
