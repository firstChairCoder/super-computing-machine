import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import Navigator from "./src/navigation";
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  

  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}