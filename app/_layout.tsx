import {useTheme} from "@/theme";
import {Stack} from "expo-router";
import {StatusBar} from "react-native";

export default function RootLayout() {
  const {colors, isDark} = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      <Stack screenOptions={{headerShown: false}} />
    </>
  );
}
