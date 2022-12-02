import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import { enableScreens } from "react-native-screens";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black
} from "@expo-google-fonts/montserrat";

import Navigator from "./src/navigation";

enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    Thin: Montserrat_100Thin,
    ExtraLight: Montserrat_200ExtraLight,
    Light: Montserrat_300Light,
    Regular: Montserrat_400Regular,
    Italic: Montserrat_400Regular_Italic,
    Medium: Montserrat_500Medium,
    SemiBold: Montserrat_600SemiBold,
    Bold: Montserrat_700Bold,
    ExtraBold: Montserrat_800ExtraBold,
    Black: Montserrat_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}
