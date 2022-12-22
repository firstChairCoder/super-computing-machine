import type { ReactNode } from "react";
import React, { useEffect, useRef, useCallback } from "react";
import { Animated, Pressable, Text } from "react-native";
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
  animatedStyle?: any;
  animate?: boolean;
  onPress?: () => void;
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
  animatedStyle?: any;
}

const Content = ({
  leftContent,
  rightContent,
  textStyle,
  isOutline = false,
  mainColor,
  disabled = false,
  subColor,
  animatedStyle,
  label
}: ContentProps) => {
  return (
    <Animated.View style={[animatedStyle, { flexDirection: "row" }]}>
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
    </Animated.View>
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
  animate,
  onPress,
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

  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAnimatePress = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 20,
      useNativeDriver: true
    }).start();
  };

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
      onPress={animate ? onAnimatePress : onPress}
    >
      <Content
        {...props}
        leftContent={leftContent}
        rightContent={rightContent}
        textStyle={textStyle}
        mainColor={mainColor}
        subColor={selectedSubColor}
        label={label}
        // animatedStyle={animatedStyle}
        animatedStyle={{ transform: [{ scale: animatedScale }] }}
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
export function CustomPressable({
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
