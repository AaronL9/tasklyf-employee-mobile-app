import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Archivo Black": require("../assets/fonts/archivo-black/ArchivoBlack-Regular.ttf"),
    Poppins: require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/poppins/Poppins-Light.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("dark");
    }, 0);

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
