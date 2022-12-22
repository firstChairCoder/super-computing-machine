import type { ReactNode } from "react";
import React, { forwardRef } from "react";
import { TextInput, View } from "react-native";
import type { ViewStyle, TextInputProps } from "react-native";

import { colors } from "../constants/colors";

interface InputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const Input = forwardRef((props: InputProps, ref: any) => {
  const { containerStyle, leftContent, rightContent, ...inputProps } = props;
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          backgroundColor: colors.white,
          borderColor: colors.disabled,
          borderWidth: 1,
          borderRadius: 8
        },
        containerStyle
      ]}
    >
      {leftContent}
      <TextInput
        {...inputProps}
        ref={ref}
        style={{
          flex: 1,
          paddingVertical: containerStyle?.padding || 8,
          marginLeft: leftContent ? 4 : 0,
          marginRight: rightContent ? 4 : 0,
          fontFamily: "Regular"
        }}
        placeholderTextColor={colors.gray100}
      />
      {rightContent}
    </View>
  );
});

export default Input;
