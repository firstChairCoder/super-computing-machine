/* eslint-disable import/no-cycle */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Typography from "../screens/Typography";
import Buttons from "../screens/Buttons";
import Colors from "../screens/Colors";
import Forms from "../screens/Forms";
import Section from "../screens/Section";
import Avatar from "../screens/Avatar";
import Accordion from "../screens/Accordion";
import SkeletonLoader from "../screens/SkeletonLoader";

export type MainStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Colors: undefined;
  Forms: undefined;
  Typography: undefined;
  Nice: undefined;
  Section: undefined;
  Avatar: undefined;
  Progress: undefined;
  Accordion: undefined;
  Skeleton: undefined;
};

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();
const Main = () => {
  const linking = {
    prefixes: [
      /* your linking prefixes */
    ],
    config: {
      screens: {
        Home: "home",
        Typography: "typography",
        Buttons: "buttons",
        Colors: "colors",
        Forms: "forms",
        Progress: "progress",
        Accordion: "accordion",
        Skeleton: "skeleton"
      }
    }
  };
  return (
    <NavigationContainer linking={linking}>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Typography" component={Typography} />
        <Screen name="Buttons" component={Buttons} />
        <Screen name="Colors" component={Colors} />
        <Screen name="Forms" component={Forms} />
        <Screen name="Section" component={Section} />
        <Screen name="Avatar" component={Avatar} />
        <Screen name="Accordion" component={Accordion} />
        {/* <Screen name="Progress" component={ProgressBar} /> */}
        <Screen name="Skeleton" component={SkeletonLoader} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Main;
