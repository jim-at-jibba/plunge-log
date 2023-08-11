import { Suspense, useEffect } from "react";
import { useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme, YStack } from "tamagui";

import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();
  const { top } = useSafeAreaInsets();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <YStack
              flex={1}
              marginTop={top}
            >
              <Stack>
                <Stack.Screen
                  name="(tabs)"
                  options={{
                    headerShown: false
                  }}
                />
              </Stack>
            </YStack>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
