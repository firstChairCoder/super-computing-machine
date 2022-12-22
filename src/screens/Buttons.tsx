import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

import Button from "../components/Button";
import { colors } from "../constants/colors";

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
