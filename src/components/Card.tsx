import React from "react";
import type { ViewStyle } from "react-native";
import { View } from "react-native";

const Card = ({
  children,
  style
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: "linen",
          borderRadius: 8,
          overflow: "hidden",
          width: "80%",
          paddingVertical: 8
        },
        style
      ]}
    >
      <View style={{ padding: 20 }}>{children}</View>
    </View>
  );
};

export default Card;
