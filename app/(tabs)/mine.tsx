import {useTheme} from "@/theme";
import React from "react";
import {Text, View} from "react-native";

const Mine = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{color: colors.text}}>Mine</Text>
    </View>
  );
};

export default Mine;
