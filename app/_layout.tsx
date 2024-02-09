import { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme, Card, Button } from "tamagui"; // Importar el componente de tarjeta y botón
import { useRouter } from "expo-router"; // Importar el hook useRouter

import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();
  const router = useRouter(); // Obtener el router

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

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <ThemeProvider
          value={{
            ...colorScheme === "light" ? DefaultTheme : DarkTheme,
            colors: {
              ...DefaultTheme.colors,
              background: "purple" // Establecer el color morado como fondo
            }
          }}
        >
          <Stack
            screenOptions={{
              headerShown: false
            }}
          >
            {/* Usar una tarjeta para indicar la carga */}
            <Card>
              {/* Puedes personalizar el contenido de la tarjeta según tus necesidades */}
              <Text>Loading...</Text>
              {/* Botón para volver al inicio */}
              <Button onPress={() => router.push("/home")}>Back to Home</Button>
            </Card>
          </Stack>
        </ThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
}
