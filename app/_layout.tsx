import React, { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  const theme = colorScheme === "light" ? DefaultTheme : DarkTheme;
  const backgroundColor = colorScheme === "light" ? '#BFC8DB' : '#0A4EDE'; // Cambiar los colores de fondo según el esquema de color

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider value={{ ...theme, colors: { ...theme.colors, background: backgroundColor } }}>
            <Stack screenOptions={{ headerShown: false }} />
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
