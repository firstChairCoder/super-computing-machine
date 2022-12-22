import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import type { StackScreenProps } from "@react-navigation/stack";

import type { MainStackParamList } from "../navigation";

export default function ({
  navigation
}: StackScreenProps<MainStackParamList, "Home">) {
  const { isDarkmode, setTheme } = useTheme();

  const styles = StyleSheet.create({
    listItem: {
      marginHorizontal: 20,
      marginTop: 20,
      padding: 20,
      backgroundColor: isDarkmode ? "#262834" : "white",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  });

  return (
    <Layout>
      <TopNav
        middleContent="UI HUB"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Buttons")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Buttons</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Typography")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Typography</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Colors")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Colors</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Forms")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Forms</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Section")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Section</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Avatar")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Avatar</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Accordion")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Accordion</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Progress</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity> */}
      </ScrollView>
    </Layout>
  );
}
