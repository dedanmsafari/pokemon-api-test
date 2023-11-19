import { useCallback, useRef } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts as useRubik,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import {
  useFonts as useRoboto,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import Navigation from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  let [RubikLoaded] = useRubik({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_700Bold,
  });

  let [RobotoLoaded] = useRoboto({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const navigationRef = useRef();
  const onLayoutRootView = useCallback(async () => {
    if (RubikLoaded && RobotoLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [RubikLoaded, RobotoLoaded]);

  if (!RubikLoaded || !RobotoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation onReady={onLayoutRootView} navigationRef={navigationRef} />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
