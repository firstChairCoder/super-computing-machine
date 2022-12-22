import { Ionicons } from "@expo/vector-icons";
import React from "react";
import type { ViewStyle } from "react-native";

import { colors } from "../constants/colors";

import { CustomPressable } from "./Button";

interface CheckBoxProps {
  size?: number;
  disabled?: boolean;
  value: boolean;
  style?: ViewStyle;
  onValueChange: (val: boolean) => void;
}
const CheckBox = ({
  size = 24,
  disabled = false,
  value = false,
  onValueChange,
  style
}: CheckBoxProps) => {
  function toggleCheck() {
    if (onValueChange) {
      onValueChange(!value);
    }
  }

  return (
    <CustomPressable
      activeOpacity={0.5}
      disabled={disabled}
      style={[
        {
          width: size,
          height: size,
          borderRadius: 4,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: value ? colors.primary : colors.disabled,
          backgroundColor: disabled
            ? colors.disabled
            : value
            ? colors.primary
            : "transparent"
        },
        style
      ]}
      onPress={toggleCheck}
    >
      <Ionicons
        name={"md-checkmark-sharp"}
        size={size - 2}
        color={disabled ? colors.white : value ? colors.white : colors.disabled}
      />
    </CustomPressable>
  );
};

export default CheckBox;
