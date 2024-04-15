import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    mulishRegular: require("../assets/fonts/Mulish/static/Mulish-Regular.ttf"),
    mulishBold: require("../assets/fonts/Mulish/static/Mulish-Bold.ttf"),
    sansBold: require("../assets/fonts/source-sans-pro/SourceSansPro-Bold.otf"),
    sansRegular: require("../assets/fonts/source-sans-pro/SourceSansPro-Regular.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <Stack onLayout={onLayoutRootView} screenOptions={{ headerShown: false }} />
  );
};

export default Layout;
