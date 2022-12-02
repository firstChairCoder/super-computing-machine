import * as React from "react";
import type { ReactNode } from "react";
import type { TextProps } from "react-native";
import { Text } from "react-native";

import { colors } from "../constants/colors";

interface Props extends TextProps {
  children?: ReactNode;
}

export const Light = (props: Props) => (
  <Text
    {...props}
    style={[{ fontFamily: "Light", fontSize: 12 }, props.style]}
  />
);

export const Regular = (props: Props) => (
  <Text
    {...props}
    style={[{ fontFamily: "Regular", fontSize: 16 }, props.style]}
  />
);

export const Italic = (props: Props) => (
  <Text {...props} style={[{ fontFamily: "Italic" }, props.style]} />
);

export const SemiBold = (props: Props) => (
  <Text
    {...props}
    style={[{ fontFamily: "SemiBold", fontSize: 28 }, props.style]}
  />
);

export const Bold = (props: Props) => (
  <Text
    {...props}
    style={[{ fontFamily: "Bold", fontSize: 36 }, props.style]}
  />
);

export const Title = (props: Props) => (
  <Bold {...props} style={[{ fontSize: 28 }, props.style]} />
);

export const Subtitle = (props: Props) => (
  <Regular
    {...props}
    style={[{ color: colors.gray100, fontSize: 25 }, props.style]}
  />
);

export const Secondary = (props: Props) => (
  <Regular
    {...props}
    style={[{ color: colors.gray100, fontSize: 16 }, props.style]}
  />
);
