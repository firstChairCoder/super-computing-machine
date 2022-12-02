import type { ReactNode } from "react";
import React, { useCallback } from "react";
import { Pressable, Text } from "react-native";
import type {
  PressableProps,
  TextStyle,
  ViewStyle,
  StyleProp
} from "react-native";

import { colors } from "../constants/colors";

interface ButtonProps extends PressableProps {
  style?: ViewStyle;
  isOutline?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  textStyle?: TextStyle;
  mainColor?: string;
  subColor?: string;
  disabled?: boolean;
  color?: string;
  label: string;
  accent?: "primary" | "success" | "warning" | "info" | "error";
}

interface ContentProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  textStyle?: TextStyle;
  isOutline?: boolean;
  mainColor?: string;
  subColor?: string;
  disabled?: boolean;
  label: string;
  accent?: "primary" | "success" | "warning" | "info" | "error";
}

const Content = ({
  leftContent,
  rightContent,
  textStyle,
  isOutline = false,
  mainColor,
  disabled = false,
  subColor,
  label
}: ContentProps) => {
  return (
    <>
      {leftContent}
      <Text
        style={[
          textStyle,
          {
            color: textStyle?.color
              ? textStyle?.color
              : isOutline
              ? mainColor
              : disabled
              ? colors.disabled
              : subColor,
            flexWrap: "wrap",
            textAlign: "center"
          }
        ]}
      >
        {label}
      </Text>
      {rightContent}
    </>
  );
};

const Button = ({
  style,
  isOutline = false,
  leftContent,
  rightContent,
  textStyle,
  color,
  //   mainColor,
  subColor,
  label,
  accent,
  disabled = false,
  ...props
}: ButtonProps) => {
  const mainColor = disabled
    ? colors.disabled
    : color
    ? color
    : accent
    ? colors[accent]
    : colors.primary;

  const selectedSubColor = subColor
    ? subColor
    : // : status
      // ? themeColor.white
      colors.primary900;

  const btnWrapperStyle = isOutline
    ? {
        borderWidth: 2,
        backgroundColor: "transparent",
        borderColor: mainColor
      }
    : { backgroundColor: mainColor };

  return (
    <CustomPressable
      style={[
        style,
        btnWrapperStyle,
        { flexDirection: "row", justifyContent: "center", alignItems: "center" }
      ]}
      disabled={disabled}
      delayHoverIn={50}
      activeOpacity={0.5}
      android_ripple={{ color: mainColor, borderless: false }}
    >
      <Content
        {...props}
        leftContent={leftContent}
        rightContent={rightContent}
        textStyle={textStyle}
        mainColor={mainColor}
        subColor={selectedSubColor}
        label={label}
      />
    </CustomPressable>
  );
};

export default Button;

interface CustomPressableProps extends PressableProps {
  children: ReactNode;
  activeOpacity: number;
  disabledOpacity?: number;
  style: StyleProp<ViewStyle>;
}
function CustomPressable({
  children,
  activeOpacity,
  style,
  disabled = false,
  disabledOpacity = 0.35,
  ...props
}: CustomPressableProps) {
  const _style = useCallback(
    ({ pressed }: { pressed: boolean }) => [
      { opacity: disabled ? disabledOpacity : pressed ? activeOpacity : 1 },
      style && style
    ],

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [style]
  );

  return (
    <Pressable style={_style} {...props}>
      {children}
    </Pressable>
  );
}
