import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "react-native-rapi-ui";
import type { StackScreenProps } from "@react-navigation/stack";

import TypograpnyCard from "../components/TypographyCard";
import type { MainStackParamList } from "../navigation";

export default function ({
  navigation
}: StackScreenProps<MainStackParamList, "Typography">) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <ScrollView
      style={{ flex: 1 }}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <TypograpnyCard size="h1" />
      <TypograpnyCard size="h2" />
      <TypograpnyCard size="h3" />
      <TypograpnyCard size="xl" />
      <TypograpnyCard size="lg" />
      <TypograpnyCard size="md" />
      <TypograpnyCard size="sm" />
    </ScrollView>
  );
}
