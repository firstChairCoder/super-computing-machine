import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import type { ColorValue } from "react-native";
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";

import { colors } from "../constants/colors";

import * as Text from "./Text";

const { width, height } = Dimensions.get("window");
type PickerItem = {
  label: string;
  value: string;
};

interface PickerProps {
  placeholder: string;
  items: PickerItem[];
  isDisabled?: boolean;
  value?: string | null;
  onChangeSelection?: (val: string) => void;
  placeholderColor?: ColorValue;
  selectedTextColor?: ColorValue;
}

const Picker = ({
  placeholder,
  items,
  isDisabled = false,
  value,
  onChangeSelection,
  placeholderColor = colors.gray100,
  selectedTextColor = colors.black
}: PickerProps) => {
  const selected = items.find((item) => item.value === value);

  const [showPicker, setShowPicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState<
    PickerItem | undefined | null
  >(value ? selected : null);

  return (
    <>
      <Modal
        visible={showPicker}
        transparent
        animationType={"fade"}
        onRequestClose={() => {
          setShowPicker(!showPicker);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.black20
          }}
        >
          <View
            style={{
              width: width * 0.9,
              maxHeight: height * 0.65,
              backgroundColor: colors.white,
              borderRadius: 8
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 16,
                justifyContent: "space-between",
                borderRadius: 8
                // backgroundColor: "#262834"
              }}
            >
              <View style={{ flex: 1 }}>
                <Text.Secondary>{placeholder}</Text.Secondary>
              </View>

              <Pressable
                style={{
                  height: 24,
                  width: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  backgroundColor: colors.gray100
                }}
                onPress={() => setShowPicker(!showPicker)}
              >
                <Ionicons
                  name="ios-close-circle"
                  size={16}
                  color={colors.black}
                />
              </Pressable>
            </View>

            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
              {items.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{ padding: 16 }}
                    onPress={() => {
                      onChangeSelection && onChangeSelection(item.value);
                      setSelectedValue(item);
                      setShowPicker(!showPicker);
                    }}
                  >
                    {selectedValue?.value === item.value ? (
                      <Text.SemiBold style={{ fontSize: 22 }}>
                        {item.label}
                      </Text.SemiBold>
                    ) : (
                      <Text.Secondary>{item.label}</Text.Secondary>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Pressable
        disabled={isDisabled}
        onPress={() => {
          setShowPicker(!showPicker);
        }}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: colors.white,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: colors.gray100,
          padding: 16
        }}
      >
        {/* {selectedValue?.label ? (
          <Text.Regular style={{ color}}>{selectedValue.label}</Text.Regular>
        ) : (
          <Text.Regular>{placeholder}</Text.Regular>
        )} */}
        <Text.Regular
          style={{
            color: selectedValue ? selectedTextColor : placeholderColor
          }}
        >
          {selectedValue?.label || placeholder}
        </Text.Regular>
        <Ionicons name="caret-down-circle" size={20} color={colors.gray100} />
      </Pressable>
    </>
  );
};

export default Picker;
