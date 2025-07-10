import {useTheme} from "@/theme";
import * as NavigationBar from "expo-navigation-bar";
import {Stack} from "expo-router";
import {useEffect} from "react";

export default function RootLayout() {
  const {colors} = useTheme();

  useEffect(() => {
    // Set the navigation bar color
    NavigationBar.setBackgroundColorAsync("#FF0000"); // Red color

    // Optional: Control icon brightness (light/dark)
    NavigationBar.setButtonStyleAsync("dark"); // or 'light'
  }, []);

  return <Stack screenOptions={{headerShown: false}} />;
}
