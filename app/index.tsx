import {useTheme} from "@/theme";
import React from "react";
import {StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Index = () => {
  const {colors, isDark, toggleTheme, spacing, radius} = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md,
      }}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
      <Text style={{color: colors.textTertiary}}>Index</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>{isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: "column", gap: spacing.lg}}>
        <View
          style={{height: spacing.sm, backgroundColor: colors.primary}}></View>
        <View
          style={{height: spacing.md, backgroundColor: colors.primary}}></View>
        <View
          style={{
            height: spacing.lg,
            borderRadius: radius.full,
            backgroundColor: colors.primary,
          }}></View>
        <View
          style={{height: spacing.xl, backgroundColor: colors.primary}}></View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
