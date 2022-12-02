// /* eslint-disable no-nested-ternary */
// /* eslint-disable import/no-anonymous-default-export */
// //Inspo: https://github.com/mrousavy/react-native-pressable-opacity
// import type { ReactNode } from "react";
// import React from "react";
// import type { TextStyle, ViewStyle, PressableProps } from "react-native";
// import { View, Pressable, StyleSheet } from "react-native";
// import type { StackScreenProps } from "@react-navigation/stack";
// import { Ionicons } from "@expo/vector-icons";

// import type { MainStackParamList } from "../navigation";
// import { colors } from "../constants/colors";
// import Text from "../components/Text";
// import type { StatusType } from "../typings";

// interface BtnContentProps {
//   label: string;
//   labelStyle?: TextStyle;
//   leftContent?: ReactNode;
//   rightContent?: ReactNode;
//   outline?: boolean;
//   selectedColor?: string;
//   disabled?: boolean;
// }
// const BtnContent = ({
//   label,
//   labelStyle,
//   leftContent,
//   rightContent,
//   outline = false,
//   selectedColor,
//   disabled = false
// }: BtnContentProps) => {
//   const contentStyles = StyleSheet.create({
//     btnLabel: {
//       marginLeft: leftContent ? 4 : 0,
//       marginRight: rightContent ? 4 : 0
//     }
//   });

//   return (
//     <View style={{ flexDirection: "row" }}>
//       {leftContent}
//       <Text
//         style={[
//           // ...labelStyle,
//           contentStyles.btnLabel,
//           {
//             color: labelStyle?.color
//               ? labelStyle?.color
//               : outline
//               ? selectedColor
//               : disabled
//               ? "gray"
//               : colors.black
//           }
//         ]}
//       >
//         {label}
//       </Text>
//       {rightContent}
//     </View>
//   );
// };

// type BtnSizes = "small" | "medium" | "large";

// interface ButtonProps extends PressableProps {
//   disabled?: boolean;
//   width?: number;
//   style?: ViewStyle;
//   outline?: boolean;
//   outlineWidth?: number;
//   size?: BtnSizes;
//   text?: string;
//   textStyle?: TextStyle;
//   leftContent?: ReactNode;
//   rightContent?: ReactNode;
//   status?: StatusType;
//   onPress?: PressableProps["onPress"];
// }

// // const styles = {
// //   large: {
// //     ...parentStyle,
// //     borderRadius: 8,
// //     paddingVertical: 12,
// //     paddingHorizontal: 16,
// //     textSize: "large",
// //   },
// //   medium: {
// //     ...parentStyle,
// //     buttonBorderRadius: 8,
// //     paddingVertical: 8,
// //     paddingHorizontal: 12,
// //     textSize: "medium",
// //   },
// //   small: {
// //     ...parentStyle,
// //     buttonBorderRadius: 8,
// //     buttonPaddingVertical: 4,
// //     buttonPaddingHorizontal: 12,
// //     textSize: "small",
// //   },
// // }

// const Button = ({
//   disabled = false,
//   width = 300,
//   style,
//   outline = false,
//   outlineWidth = 8,
//   size = "large",
//   leftContent,
//   rightContent,
//   onPress,
//   ...rest
// }: ButtonProps) => {
//   const btnWrapperStyle = outline
//     ? {
//         borderWidth: outlineWidth || 2,
//         backgroundColor: outline ? "transparent" : colors.primary100,
//         borderColor: colors.primary
//       }
//     : { backgroundColor: colors.primary };

//   const btnStyles = StyleSheet.create({
//     btnWrapper: {
//       flexDirection: "row",
//       justifyContent: "center",
//       alignItems: "center",
//       width,
//       // backgroundColor: colors.primary,
//       borderRadius: style?.borderRadius || 8,
//       paddingVertical: 8,
//       paddingHorizontal: 8

//       // paddingHorizontal,
//       // paddingVertical
//     }
//   });

//   return (
//     // <Pressable {...rest} disabled={disabled}>
//     <Pressable
//       {...rest}
//       disabled={disabled}
//       style={({ pressed: isPressed }) => [
//         btnWrapperStyle,
//         btnStyles.btnWrapper,
//         // isPressed ? [style, pressedStyle] : style
//         style
//       ]}
//       onPress={onPress}
//       delayLongPress={50}
//       android_ripple={{
//         color: colors.primary100,
//         borderless: outline ? true : false
//       }}
//     >
//       {/* <View> */}
//       <BtnContent
//         label="Join Us"
//         selectedColor={disabled ? colors.disabled : colors.primary}
//         leftContent={leftContent}
//         rightContent={rightContent}
//       />
//       {/* </View> */}
//     </Pressable>
//     // </Pressable>
//   );
// };

// export default function ({
//   navigation
// }: StackScreenProps<MainStackParamList, "Buttons">) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Button
//         style={{ marginTop: 10 }}
//         leftContent={
//           <Ionicons name="logo-twitter" size={24} color={colors.white} />
//         }
//       />
//     </View>
//   );
// }

import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

import Button from "../components/Button";
import { colors } from "../constants/colors";

// interface ButtonScreenProps {}

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        backgroundColor: "linen",
        borderRadius: 8,
        overflow: "hidden",
        width: "80%",
        paddingVertical: 8
      }}
    >
      <View style={{ padding: 20 }}>{children}</View>
    </View>
  );
};

const ButtonScreen = () => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPress = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 20,
      useNativeDriver: true
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "snow"
      }}
    >
      <Card>
        <Button
          style={{
            marginVertical: 8,
            borderRadius: 8,
            height: 40,
            paddingHorizontal: 8
          }}
          textStyle={{ fontFamily: "Black", fontSize: 20 }}
          // isOutline
          accent="primary"
          label={"Basic Button"}
        />

        <Button
          style={{
            marginVertical: 8,
            borderRadius: 8,
            paddingHorizontal: 8
          }}
          textStyle={{ fontFamily: "Black", fontSize: 20 }}
          isOutline
          accent="info"
          label={"Basic Button w/ outline"}
        />

        <Button
          style={{ marginVertical: 8, borderRadius: 8, height: 40 }}
          textStyle={{ fontFamily: "Black", fontSize: 20 }}
          disabled
          accent="warning"
          label={"Disabled Button"}
        />

        <Button
          style={{ marginVertical: 8, borderRadius: 8, padding: 8 }}
          textStyle={{ fontFamily: "Black", fontSize: 20, color: colors.white }}
          // isOutline
          accent="success"
          label={"Success Button w/ content"}
          leftContent={
            <Ionicons
              name="logo-android"
              size={32}
              color={colors.white}
              style={{ marginRight: 8 }}
            />
          }
        />

        <Button
          style={{ marginVertical: 8, borderRadius: 8, padding: 8 }}
          textStyle={{ fontFamily: "Black", fontSize: 20, color: colors.error }}
          isOutline
          accent="error"
          label={"Error Button w/ content"}
          rightContent={
            <Ionicons
              name="logo-apple"
              size={32}
              color={colors.error}
              style={{ marginLeft: 8 }}
            />
          }
        />

        <Button
          style={{
            marginVertical: 8,
            borderRadius: 8,
            height: 80,
            paddingHorizontal: 8
          }}
          textStyle={{ fontFamily: "Black", fontSize: 20, color: colors.white }}
          accent="warning"
          label={"Warning Button w/ animation"}
          animate
        />
      </Card>
    </View>
  );
};

export default ButtonScreen;
