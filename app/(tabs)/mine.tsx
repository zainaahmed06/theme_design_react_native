import {useTheme} from "@/theme";
import React from "react";
import {Button, Text, View} from "react-native";

const Mine = () => {
  const {colors, isDark, toggleTheme} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{color: colors.text}}>Mine</Text>
      <Button
        onPress={toggleTheme}
        title={isDark ? "Light Mode" : "Dark Mode"}
      />
    </View>
  );
};

export default Mine;
