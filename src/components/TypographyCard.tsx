import React from "react";
import { StyleSheet, View } from "react-native";
import { Text as AText } from "react-native-rapi-ui";
import type { fontSize } from "react-native-rapi-ui/constants/typography";

import * as Text from "./Text";
import Card from "./Card";

const styles = StyleSheet.create({
  h1: { fontSize: 36 },
  h2: { fontSize: 30 },
  h3: { fontSize: 24 },
  xl: { fontSize: 20 },
  lg: { fontSize: 16 },
  md: { fontSize: 12 },
  sm: { fontSize: 8 }
});

interface Props {
  size?: keyof typeof fontSize;
}
type SizeType = "h1" | "h2" | "h3" | "xl" | "lg" | "md" | "sm";

const TypographyCard = ({ size }: { size: SizeType }) => {
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 8,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AText fontWeight="medium">Size </AText>
        <Text.Title style={{ textTransform: "uppercase" }}>{size}</Text.Title>
      </View>

      <Card style={{ alignSelf: "center" }}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text.Subtitle>Normal</Text.Subtitle>
        </View>
        <>
          <Text.Bold style={styles[size]}>Montserrat Bold</Text.Bold>
          <Text.SemiBold style={styles[size]}>Montserrat Medium</Text.SemiBold>
          <Text.Regular style={styles[size]}>Montserrat Regular</Text.Regular>
          <Text.Light style={styles[size]}>Montserrat Light</Text.Light>
        </>

        <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 20 }}>
          <Text.Secondary>Italics</Text.Secondary>
        </View>
        <>
          <Text.Italic style={styles[size]}>Montserrat Italic</Text.Italic>
        </>
      </Card>
    </>
  );
};
export default TypographyCard;
