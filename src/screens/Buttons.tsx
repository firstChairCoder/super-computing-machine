/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-anonymous-default-export */
import type { ReactNode } from "react";
import React from "react";
import type { TextStyle, ViewStyle, PressableProps } from "react-native";
import { View, Pressable, StyleSheet } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import type { MainStackParamList } from "../navigation";
import { colors } from "../constants/colors";
import Text from "../components/Text";
import type { StatusType } from "../typings";

interface BtnContentProps {
  label: string;
  labelStyle?: TextStyle;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  outline?: boolean;
  selectedColor?: string;
  disabled?: boolean;
}
const BtnContent = ({
  label,
  labelStyle,
  leftContent,
  rightContent,
  outline = false,
  selectedColor,
  disabled = false
}: BtnContentProps) => {
  const contentStyles = StyleSheet.create({
    btnLabel: {
      marginLeft: leftContent ? 4 : 0,
      marginRight: rightContent ? 4 : 0
    }
  });

  return (
    <View style={{ flexDirection: "row" }}>
      {leftContent}
      <Text
        style={[
          // ...labelStyle,
          contentStyles.btnLabel,
          {
            color: labelStyle?.color
              ? labelStyle?.color
              : outline
              ? selectedColor
              : disabled
              ? "gray"
              : colors.black
          }
        ]}
      >
        {label}
      </Text>
      {rightContent}
    </View>
  );
};

type BtnSizes = "small" | "medium" | "large";

interface ButtonProps extends PressableProps {
  disabled?: boolean;
  width?: number;
  style?: ViewStyle;
  outline?: boolean;
  outlineWidth?: number;
  size?: BtnSizes;
  text?: string;
  textStyle?: TextStyle;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  status?: StatusType;
  onPress?: PressableProps["onPress"];
}

// const styles = {
//   large: {
//     ...parentStyle,
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     textSize: "large",
//   },
//   medium: {
//     ...parentStyle,
//     buttonBorderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     textSize: "medium",
//   },
//   small: {
//     ...parentStyle,
//     buttonBorderRadius: 8,
//     buttonPaddingVertical: 4,
//     buttonPaddingHorizontal: 12,
//     textSize: "small",
//   },
// }

const Button = ({
  disabled = false,
  width = 300,
  style,
  outline = false,
  outlineWidth = 8,
  size = "large",
  leftContent,
  rightContent,
  onPress,
  ...rest
}: ButtonProps) => {
  const btnWrapperStyle = outline
    ? {
        borderWidth: outlineWidth || 2,
        backgroundColor: outline ? "transparent" : colors.primary100,
        borderColor: colors.primary
      }
    : { backgroundColor: colors.primary };

  const btnStyles = StyleSheet.create({
    btnWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width,
      // backgroundColor: colors.primary,
      borderRadius: style?.borderRadius || 8,
      paddingVertical: 8,
      paddingHorizontal: 8

      // paddingHorizontal,
      // paddingVertical
    }
  });

  return (
    // <Pressable {...rest} disabled={disabled}>
    <Pressable
      {...rest}
      disabled={disabled}
      style={({ pressed: isPressed }) => [
        btnWrapperStyle,
        btnStyles.btnWrapper,
        // isPressed ? [style, pressedStyle] : style
        style
      ]}
      onPress={onPress}
      delayLongPress={50}
      android_ripple={{
        color: colors.primary100,
        borderless: outline ? true : false
      }}
    >
      {/* <View> */}
      <BtnContent
        label="Join Us"
        selectedColor={disabled ? colors.disabled : colors.primary}
        leftContent={leftContent}
        rightContent={rightContent}
      />
      {/* </View> */}
    </Pressable>
    // </Pressable>
  );
};

export default function ({
  navigation
}: StackScreenProps<MainStackParamList, "Buttons">) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={{ marginTop: 10 }}
        leftContent={
          <Ionicons name="logo-twitter" size={24} color={colors.white} />
        }
      />
    </View>
  );
}
