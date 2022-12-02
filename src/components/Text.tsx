import React from "react";
import { Text as RNText } from "react-native";
import type { TextStyle } from "react-native";

import type { StatusType } from "../typings";
import { colors } from "../constants/colors";

interface CustomTextProps {
  style?: TextStyle;
  status?: StatusType;
}

const CustomText = ({
  style,
  status = "primary",
  ...rest
}: CustomTextProps) => {
  const statusColor = colors[status];

  return (
    <RNText
      {...rest}
      style={{
        ...style,
        // fontFamily: font(),
        fontSize: 16,
        color: colors.black
      }}
    />
  );
};

export default CustomText;
